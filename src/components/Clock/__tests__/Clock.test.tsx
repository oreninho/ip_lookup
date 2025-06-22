import React from 'react'
import { render, screen } from '@testing-library/react'
import { act } from 'react-dom/test-utils'
import Clock from '../Clock'

describe('Clock component tests', () => {
    beforeAll(() => {
        jest.useFakeTimers()
    })

    afterAll(() => {
        jest.useRealTimers()
    })

    test('clock updates every second', () => {
        const timezone = 'America/New_York'
        render(<Clock timezone={timezone} />)


        const timeRegex = /\d{2}:\d{2}:\d{2}/
        const initialNode = screen.getByText(timeRegex)
        expect(initialNode).toBeInTheDocument()
        const initialTime = initialNode.textContent

        act(() => {
            jest.advanceTimersByTime(1000)
        })

        const updatedNode = screen.getByText(timeRegex)
        expect(updatedNode).toBeInTheDocument()
        const updatedTime = updatedNode.textContent
        expect(updatedTime).not.toBe(initialTime)
    })
})
