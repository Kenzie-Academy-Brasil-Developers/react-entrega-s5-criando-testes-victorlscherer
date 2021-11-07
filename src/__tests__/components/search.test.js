import React from "react";
import { render, screen } from "@testing-library/react";
import Input from "../../components/Search/index";
import Button from "../../components/Search/index";

describe("Input Component", () => {
    test("should be able to render an input", () => {
        render(<Input placeholder="Email" />);

        expect(screen.getByPlaceholderText("Insira o CEP")).toBeTruthy()
    })
});

describe("Button Component", () => {
    test("should be able to render an button", () => {
        render(<Button>Buscar pelo CEP</Button>);

        expect(screen.getAllByRole("button")).toBeTruthy()
    })
})