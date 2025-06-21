import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import Modal from '../Modal'

describe('<Modal />', () => {
    it('renders its children and calls onClose when backdrop is clicked', async () => {
        const handleClose = jest.fn()
        render(
            <Modal isOpen={true} onClose={handleClose}>
                <div>Hey there</div>
            </Modal>
        )
       await expect(screen.getByText('Hey there')).toBeInTheDocument()
        fireEvent.click(screen.getByRole('dialog'))
        expect(handleClose).toHaveBeenCalled()
    })
})
