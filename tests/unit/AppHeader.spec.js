import AppHeader from '@/components/AppHeader';
import { mount } from '@vue/test-utils'

describe('AppHeader', () => {
    const wrapper = mount(AppHeader)

    test('if a user is not logged in, do not show the logout button', () => {
        expect(wrapper.find('button').isVisible()).toBe(false)
    })

    test('if a user is logged in, show the logout button', async () => {
        wrapper.setData({ loggedIn: true })
        await wrapper.vm.$nextTick()
        expect(wrapper.find('button').isVisible()).toBe(true)
    })
})
