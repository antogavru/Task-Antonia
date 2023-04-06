import React from "react"
import { screen } from "@testing-library/react"
import { render } from "../../test-utils"
import CardComponent from "./CardComponent"

test("renders titles", () => {
    render(<CardComponent key={0} image={{
        "url": "https://images.unsplash.com/photo-1589262804704-c5aa9e6def89?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8ZXVyb3BlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
    }} title={"European Quest"} countries={8} days={21} emissions={810} rate={3.5} />)

    const euTitle = screen.getByText(/European Quest/)
    expect(euTitle).toBeInTheDocument()
    const rating = screen.getByText(/Trip rating:/)
    expect(rating).toBeInTheDocument()
 
})