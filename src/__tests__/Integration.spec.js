import React from "react";
import { render, fireEvent, wiatFor, screen } from "@testing-library/react";
import Search from '../components/Search'

describe("Search for CEP", () => {
    it("should be able to search a CEP", () => {
        render(<Search />);

        const cepField = screen.getByPlaceholderText("Insira o CEP")

        const buttonElement = screen.getByText("Buscar pelo CEP")

        fireEvent.change(cepField, { target: { value: "87111-200" } })

        fireEvent.click(buttonElement)
    })
})