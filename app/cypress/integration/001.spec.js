/// <reference types="cypress" />


describe('caesar cypher',() => {
    beforeEach(() => {
        cy.visit('../../lightbox.html');
    });

    it('should complete caesar from and show result',() => {
        cy.get('input[name=cypher-key]').clear().type(3);
        cy.get('textarea').type('A');
        cy.get('button').click();
        cy.get('#result').should('have.text','D');


        cy.dataCy('cypher-key').clear().type(3);
    })
})