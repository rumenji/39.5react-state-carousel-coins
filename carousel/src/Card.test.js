import React from "react";
import '@testing-library/jest-dom'
import { render } from "@testing-library/react"
import Card from "./Card";

it("renders a card", function(){
    render(<Card />);
});

it("matches card snapshot", function(){
    const {asFragment} = render(<Card />);
    expect(asFragment()).toMatchSnapshot();
});

