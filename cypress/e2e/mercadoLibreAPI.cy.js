describe('Mercado Libre API', () => {

    it("Listar Departamentos en MercadoLibre", () => {
        cy.request("GET", " https://www.mercadolibre.com.ar/menu/departments").should((response) => {
            expect(response.status).to.eq(200);
            expect(response.body).to.have.property('departments');
        });
    });
});