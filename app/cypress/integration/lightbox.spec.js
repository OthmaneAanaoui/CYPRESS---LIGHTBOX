/// <reference types="cypress" />


describe('lightbox',() => {
    beforeEach(() => {
        cy.visit('../../lightbox.html');
    });
    
    it('should open lightbox',() => {
       //1. Tester l’ouverture de la lightbox au clique sur l’image.
        cy.get('[data-cy=overlay]').click();

        
        //cy.get('[data-cy=overlay]').find("img").should('be.visible');
        cy.get('[data-cy=lightbox]').should('be.visible');


        //2. Tester la fermeture de la lightbox au clique en dehors de la lightbox.
        cy.get('body').click(0,0);
        cy.get('[data-cy=lightbox]').should('not.be.visible');


        //3. Tester l’ajout de la mention "j’aime" et ses compteurs, overlay et lightbox.
        
        //cy.get('[data-cy=data-like]').click();
    });

    
})