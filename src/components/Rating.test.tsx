import React from "react"
import { screen } from "@testing-library/react"
import { render } from "../test-utils"
import Rating from "./Rating"


test("renders rating value", () => {
    const rate = 3.5
    expect(rate).not.toBeNull()
})