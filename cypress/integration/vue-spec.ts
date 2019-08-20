describe('', () => {
    beforeEach(() => {
        cy.visit('');
    });
    it('works', () => {
        cy.get('h1').contains('Welcome to').should('be.visible');
    });
});
