import { mount } from '@vue/test-utils'
import PageIndex from '~/pages/index.vue'

test('page index', () => {
  const wrapper = mount(PageIndex)
  expect(wrapper.html()).toContain('nuxt 3')
  expect(wrapper.html()).toContain('awesome')
  expect(wrapper.html()).toContain('starter')
})
