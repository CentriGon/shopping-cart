import { render, screen } from '@testing-library/react';
import NavBar from './NavBar';
import React from "react";
import "@testing-library/jest-dom";  // optional
// import userEvent from "@testing-library/user-event";
// import TestComponent from "path-to-test-component";

it("renders header", () => {
    render(<NavBar numItems={1}/>)
    const header = screen.getByTestId("head")
    expect(header.textContent).toMatch("MalWart")
})

it("renders number of items correctly", () => {
    render(<NavBar numItems={5}/>)
    const numItems = screen.getByTestId("numItems");
    expect(numItems.textContent).toMatch("5")
})