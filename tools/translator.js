const fs = require('fs')
const path = require('path')
const yaml = require('js-yaml')
const translate = require('translate')
const args = process.argv.slice(2)

// funcs
const getArg = (index, def = undefined) => {
  try {
    if (!args[index] && !def) throw new Error('Argument not found')
    return args[index] || def
  } catch (error) {
    console.error(`Missing argument ${index}`)
    process.exit(1)
  }
}
const getFiles = (dir) => {
  const files = []
  fs.readdirSync(dir).forEach((file) => {
    const filePath = path.join(dir, file)
    const stat = fs.statSync(filePath)
    if (stat.isFile() && file.endsWith('.yml'))
      files.push({
        path: filePath,
        lang: file.replace('.yml', ''),
      })
  })
  return files
}
const translateFile = async (file, locale) => {
  // file is nested object string
  // for each all file object child and translate
  const translatedRes = {}

  const eachCurrLevel = async (obj, parentKey) => {
    for (const key in obj) {
      const value = obj[key]
      const nextParent = parentKey ? `${parentKey}.${key}` : key
      if (typeof value === 'string') {
        translatedRes[`${nextParent}`] = await translate(value, {
          to: locale.lang || 'en',
        })
      } else if (typeof value === 'object') {
        await eachCurrLevel(value, `${nextParent}`)
      }
    }
  }
  await eachCurrLevel(file, '')

  // parse
  const parseObjLevel = {}
  for (const key in translatedRes) {
    let value = translatedRes[key]
    const keySplit = key.split('.')
    const keyLevel = keySplit.length

    if (typeof value === 'string') value = `${value}`.toLowerCase()

    let currParent = parseObjLevel
    for (let i = 0; i < keyLevel; i++) {
      const currKey = keySplit[i]
      if (!currParent[currKey]) currParent[currKey] = {}
      if (i === keyLevel - 1) currParent[currKey] = value
      currParent = currParent[currKey]
    }

    parsedObj = parseObjLevel
  }

  // return
  return parseObjLevel
}

// vars
const cwd = process.cwd()
const localePath = path.join(cwd, getArg(0, './locales'))
const engLocale = path.join(localePath, getArg(1, 'en.yml'))
const listLocaleToTranslate = getFiles(localePath).filter(
  (l) => l.lang !== 'en'
)

// main funcs
async function main() {
  // info
  console.log('==============================================')
  console.log(`Target Locales Path: ${localePath}`)
  console.log(`Main Locale: ${engLocale}`)
  console.log(
    `Locales to translate: ${listLocaleToTranslate.map((f) => f.lang)}`
  )

  // translating
  console.log('==============================================')
  console.log(`Starting translate with engine "${translate.engine}"...`)
  for (const locale of listLocaleToTranslate) {
    console.log(`Translating ${locale.lang}...`)
    try {
      // load file
      const file = yaml.load(fs.readFileSync(engLocale, 'utf8'))

      // translate
      const t = await translateFile(file, locale)

      // save to file
      fs.writeFileSync(locale.path, yaml.dump(t))
    } catch (e) {
      console.error(e)
    }
  }
}

main()
