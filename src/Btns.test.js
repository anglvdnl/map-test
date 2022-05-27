// import React from 'react'
// import { render, screen } from '@testing-library/react'
// import userEvent from '@testing-library/user-event'
// import App from './App'

// describe("Change View", () => {

//     it("List View", () => {
//         render(<App />);
//         const lb = screen.getByText(/List View/i);
//         let lv = screen.queryByText("List");
//         let mv = screen.getByTestId('map')
//         userEvent.click(lb)
//         lv = screen.getByText("List")
//         mv = screen.queryByTestId('map')
//         expect(lv).toBeInTheDocument()
//         expect(mv).toBeNull()
//     })
//     it("Map View", () => {
//         render(<App />);
//         const mb = screen.getByText(/Map View/i)
//         let mv = screen.queryByTestId('map')
//         const lv = screen.queryByText("List");
//         userEvent.click(mb)
//         mv = screen.getByTestId('map')
//         expect(mv).toBeInTheDocument()
//         expect(lv).toBeNull()
//     })
// })