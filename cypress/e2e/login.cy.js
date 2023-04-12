
describe('SauceDemo Login', () => {

    beforeEach(() => {
        cy.clearCache();
        cy.visit('https://www.saucedemo.com/');
    });


    it('should login', () => {
        cy.get('#user-name').type('standard_user');
        cy.get('#password').type('secret_sauce');
        cy.get('#login-button').click();
        cy.get('#inventory_container').should('be.visible');
    });


    it('Login with bad credentials', () => {
        cy.get('#user-name').type('standard_user');
        cy.get('#password').type('bad_password');
        cy.get('#login-button').click();
        cy.get('#login_button_container').should('be.visible');
    });

    it('Login with locked user', () => {
        cy.get('#user-name').type('locked_out_user');
        cy.get('#password').type('secret_sauce');
        cy.get('#login-button').click();
        cy.get('[data-test="error"]').should('be.visible').invoke('text').should('eq', 'Epic sadface: Sorry, this user has been locked out.');

    });

    it('should login failed', () => {
        cy.get('#user-name').type('standard_user');
        cy.get('#password').type('xyz');
        cy.get('#login-button').click();
        cy.get('#inventory_container').should('be.visible');
    });


});
