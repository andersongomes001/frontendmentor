const pages = require("../support/pages");

Cypress.Screenshot.defaults({
  overwrite: true,
});
describe("template spec", () => {
  beforeEach(() => {
    cy.viewport(375, 1080);
  });

  pages.forEach((page) => {
    it(`print ${page}`, () => {
      const url = `http://localhost:3000/${page}/index.html`;
      cy.visit(url);
      cy.screenshot(`${page}_mobile`);
      cy.wait(5000);
    });
  });
});
