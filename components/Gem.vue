<script>
// taken from https://github.com/nuxt/framework/blob/main/docs/components/atoms/Gem.vue
export default {
  data() {
    return {
      ready: false,
    }
  },
  async mounted() {
    const THREE = await import('three').then((m) => m.default || m)
    const { OrbitControls } = await import(
      'three/examples/jsm/controls/OrbitControls.js'
    ).then((m) => m.default || m)
    const { GLTFLoader } = await import(
      'three/examples/jsm/loaders/GLTFLoader.js'
    ).then((m) => m.default || m)
    // Canvas
    let canvas = document.querySelector('canvas.webgl')

    // wait
    while (!canvas) {
      await new Promise((resolve) => setTimeout(resolve, 50))
      canvas = document.querySelector('canvas.webgl')
    }

    // Scene
    const scene = new THREE.Scene()

    // Models
    let gem
    let light

    const gltfLoader = new GLTFLoader()
    gltfLoader.load('/assets/gem/gem.gltf', (gltf) => {
      // Gem
      gem = gltf.scene.children[6]

      // Material setup
      // const textureLoader = new THREE.TextureLoader()
      // const roughnessTexture = textureLoader.load('/assets/gem/roughness.jpeg')
      // gem.material.roughnessMap = roughnessTexture
      gem.material.displacementScale = 0.15
      gem.material.emissiveIntensity = 0.4
      gem.material.refractionRatio = 1
      gem.rotation.z = 0
      // change color
      scene.add(gem)

      light = gltf.scene.children[0]
      scene.add(light)
      this.ready = true
    })

    // Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 2)
    scene.add(ambientLight)

    const directionalLight = new THREE.DirectionalLight(0xffffff, 3)
    directionalLight.position.set(1, 1, 1)
    scene.add(directionalLight)

    const directionalLight2 = new THREE.DirectionalLight(0xffffff, 3)
    directionalLight2.position.set(-1, -1, -1)
    scene.add(directionalLight2)

    // Settings
    const sizes = {
      width: 500,
      height: 500,
    }

    // Base camera
    const camera = new THREE.PerspectiveCamera(
      75,
      sizes.width / sizes.height,
      0.1,
      100
    )
    camera.position.set(2, 2, 6)
    scene.add(camera)

    // Controls
    const controls = new OrbitControls(camera, canvas)
    controls.enableZoom = false
    controls.target.set(0, 0.75, 0)
    controls.enableDamping = true
    controls.enablePan = false
    // Lock Y Axis
    controls.minPolarAngle = Math.PI / 2
    controls.maxPolarAngle = Math.PI / 2

    // Render
    const renderer = new THREE.WebGLRenderer({
      antialiasing: true,
      canvas,
      alpha: true,
    })
    renderer.setClearColor(0x000000, 0)
    renderer.shadowMap.enabled = true
    renderer.shadowMap.type = THREE.PCFSoftShadowMap
    renderer.setSize(sizes.width, sizes.height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

    // Animations
    const clock = new THREE.Clock()
    let previousTime = 0

    const tick = () => {
      const elapsedTime = clock.getElapsedTime()
      const _deltaTime = elapsedTime - previousTime
      previousTime = elapsedTime
      if (gem) {
        gem.rotation.y = 1.1 * elapsedTime
      }

      // Update controls
      controls.update()

      // Render
      renderer.render(scene, camera)

      // Call tick again on the next frame
      window.requestAnimationFrame(tick)
    }

    tick()
  },
}
</script>

<template>
  <canvas class="webgl" :style="{ opacity: ready ? 1 : 0 }" />
</template>

<style scoped>
.webgl {
  outline: none;
  width: 300px;
  height: 300px;
  opacity: 0;
  transition: opacity 1s ease;
}
</style>
