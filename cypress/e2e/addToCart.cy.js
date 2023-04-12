describe('SauceDemo Add to Cart', () => {

    beforeEach(() => {
        cy.clearCache();
        cy.visit('https://www.saucedemo.com/');
        cy.get('#user-name').type('standard_user');
        cy.get('#password').type('secret_sauce');
        cy.get('#login-button').click();
        cy.get('#inventory_container').should('be.visible');
    });

    it('Add to cart', () => {
        cy.get('#add-to-cart-sauce-labs-backpack').click();
        cy.get('#shopping_cart_container').click();
        cy.get('#cart_contents_container').should('be.visible');
    });

    it('Add to cart and remove', () => {
        cy.get('#add-to-cart-sauce-labs-backpack').click();
        cy.get('#shopping_cart_container').click();
        cy.get('#cart_contents_container').should('be.visible');
        cy.get('#remove-sauce-labs-backpack').click();
        cy.get('#cart_contents_container').not('be.visible');
    });

})