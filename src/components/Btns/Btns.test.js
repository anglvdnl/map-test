import React from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import List from '../List/List'
import Map from '../Map/Map'

describe("Change View", () => {
    it("List View", () => {
        const { queryByTestId } = render(<List />);
        const mapBtn = screen.getByText(/Map View/i)
        const ListView = screen.queryByTestId("test-list");
        expect(ListView).toBeNull();
        userEvent.click(mapBtn)
        expect(ListView).toBeInTheDocument()
    })
    it("Map view", () => {
        
    })
})