import React from "react";
import '@testing-library/jest-dom'
import { render } from "@testing-library/react"
import Coin from "./Coin";


it("renders a card", function(){
    render(<Coin />);
});

it("matches card snapshot", function(){
    const {asFragment} = render(<Coin />);
    expect(asFragment()).toMatchSnapshot();
});

