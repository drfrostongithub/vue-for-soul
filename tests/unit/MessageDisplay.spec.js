import MessageDisplay from '@/components/MessageDisplay'
import { mount } from '@vue/test-utils'
import { getMessage } from '@/services/axios'
import flushPromises from 'flush-promises';

jest.mock('@/services/axios')

describe('MessageDisplay', () => {

    it('Calls getMessage and displays message', async () => {
        const mockMessage = 'Hello from the db'
        getMessage.mockResolvedValueOnce({ text: mockMessage }) // calling our mocked get request
        const wrapper = mount(MessageDisplay)
        // wait for promise to resolve
        await flushPromises()
        // check that call happened once
        expect(getMessage).toHaveBeenCalledTimes(1)
        // check that component displays message
        const message = wrapper.find('[data-testid="message"]')
            .element.textContent
        expect(message).toEqual(mockMessage)
    })

    it('Display an error when getMessage call fails', async ()=> {

    })
})
