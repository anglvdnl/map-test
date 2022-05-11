import React from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { MapContainer, TileLayer, Marker, Popup, } from 'react-leaflet'
import Map from './Map'

test("Popup Open", () => {
    const data = [
        {
            img: {},
            indev: {},
            h1: 'Amherst Community Wind Farm',
            p: 'Developer: Amherst Community',
            loc: 'Unknown',
            icon: "Wind",
            iconClicked: "WClicked", 
            buttton: "Wind",
            pos: [55, 12],
            size: 40
        },
        {
            img: {},
            indev: {},
            h1: 'Amherst Community Wind Farm',
            p: 'Developer: Amherst Community',
            loc: 'Unknown',
            icon: "Ev",
            iconClicked: "EvClicked", 
            buttton: "Battery",
            pos: [54.5, 12],
            size: 40
        },
        {
            img: {},
            indev: {},
            h1: 'Amherst Community Wind Farm',
            p: 'Developer: Amherst Community',
            loc: 'Unknown',
            icon: "Estorage",
            iconClicked: "EClicked", 
            buttton:"Battery",
            pos: [55, 13],
            size: 40
        },
    ]
    render(<Map data={data} />)
    const markerList = screen.queryAllByTestId('marker-test')
})