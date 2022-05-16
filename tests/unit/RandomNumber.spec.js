import RandomNumber from '@/components/RandomNumber';
import { mount } from '@vue/test-utils';

describe('RandomNumber', () => {
    const wrapper = mount(RandomNumber)

    test('By default, randomNumber data value should be 0', () => {
        expect(wrapper.html()).toContain('<span>0</span>');
    })

    test('If button is clicked, randomNumber should be between 1 and 10', async () => {
        wrapper.find('button').trigger('click')

        await wrapper.vm.$nextTick()
        const randomNumber = parseInt(wrapper.find('span').element.textContent)
        expect(randomNumber).toBeGreaterThan(1);
        expect(randomNumber).toBeLessThan(10);
    })

    test('If button is clicked, randomNumber should be between 200 and 300', async () => {
        const wrapperThird = mount(RandomNumber, {
            propsData: {
                min: 200,
                max: 300
            }
        })
        wrapperThird.find('button').trigger('click')

        await wrapper.vm.$nextTick()
        const randomNumber = parseInt(wrapperThird.find('span').element.textContent)
        expect(randomNumber).toBeGreaterThan(200);
        expect(randomNumber).toBeLessThan(300);
    })
})
