// Visit /dashboard - Should be O.K. green

describe('Dashboard Page', () => {
    it('Sucessfully loads', () => {
        cy.visit('/dashboard');
    });
});
