import {render, screen, fireEvent, within, act} from '@testing-library/react'
import  IpLookupPage from '../IpLookupPage.tsx'
import { debug } from 'jest-preview'
describe('Ip Lookup Page', () => {
  test('renders the IpLookupPage component', async () => {
      debug();
      render(<IpLookupPage />);
        const ips = ['1.1.1.1','8.8.8.8']
        screen.getByText('TITLE');
        screen.getByText('SUBTITLE');
        const button = screen.getByRole('button', { name: 'ADD_BUTTON_LABEL' });
        const list = screen.getByRole('list',{ name: 'LIST_LABEL' });
        let listItems = within(list).getAllByRole('listitem');
        let input = within(listItems[0]).getByRole('textbox', { name: /INPUT_LABEL/ });
         await act(() => {
           fireEvent.change(input, {target: {value: ips[0]}});
         });
        await act(() => {
            fireEvent.blur(input);
        })
        expect(input).toHaveValue(ips[0]);
        const img = await within(listItems[0]).findByRole('img', { name: 'AU' });
        await act(() => {
            fireEvent.click(button);
        });
        listItems = within(list).getAllByRole('listitem');
        expect(listItems).toHaveLength(2);



  })

})