describe("Catégorie : interactions de base", () => {
  beforeEach(() => {
    cy.visit("/morpion.html");
  }),
    it("Test 1.1 : le site est accessible    ", () => {
      cy.visit("/morpion.html");
    }),
    it("Test 1.2 : le site est prêt à jouer quand on y accède", () => {
      cy.get("#11").click();
      cy.get("#11").should("have.value", "X");
    }),
    it("Test 1.3 : les clics fonctionnent    ", () => {
      cy.get("#23").click();
      cy.get("#23").should("have.value", "X");
    }),
    it("Test 1.4 : l'alternance des joueurs est respectée", () => {
      cy.get("#messages").should("have.text", "Joueur 1, à toi de jouer !");
      cy.get("#11").click();
      cy.get("#messages").should("have.text", "Joueur 2, à toi de jouer !");
    });
});