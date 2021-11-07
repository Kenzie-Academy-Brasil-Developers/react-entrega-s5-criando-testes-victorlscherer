context("Integration", () => {
    it("should do a search of CEP", () => {
        cy.visit('http://localhost:3000')
        cy.viewport(1440, 900)

        cy.get("input[name=CEP]").type("87111200");
        cy.get("button:contains(Buscar pelo CEP)").click();

        cy.contains("Complemento")
    })
})