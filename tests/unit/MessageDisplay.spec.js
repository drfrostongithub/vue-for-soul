import MessageDisplay from '@/components/MessageDisplay'
import { mount } from '@vue/test-utils'
import { getMessage } from '@/services/axios'

jest.mock('@/services/axios')

describe('MessageDisplay', () => {
    const wrapper = mount(MessageDisplay)

    it('Calls getMessage and displays message', async () => {
        const mockMessage = 'Hello from the db'
        getMessage.mockResolvedValueOnce({ text: mockMessage }) // calling our mocked get request
        // wait for promise to resolve
        // check that call happened once
        // check that component displays message
    })

    it('Display an error when getMessage call fails', async ()=> {

    })
})
