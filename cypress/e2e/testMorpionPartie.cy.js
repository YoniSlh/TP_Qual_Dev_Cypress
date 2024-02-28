describe("Catégorie : Gestion de la victoire en 'Simple' (3x3)", () => {
  beforeEach(() => {
    cy.visit("/morpion.html");
      }),
    it("Test 4.1 : Réinitialisation du jeu après une partie nulle (3x3)", () => {
      const tabCases = [11, 21, 31, 12, 13, 33, 23, 22, 32];
      cy.wrap(tabCases).each((index) => {
        cy.get("#" + index).click();
      });
      cy.get("#btn_reset").click();
      cy.get("#messages").should("have.text", "Joueur 1, à toi de jouer !");
    }),

    it("Test 4.2 : Réinitialisation du jeu après une victoire (3x3)", () => {
      const tabCases = [11, 12, 21, 22, 31];
      cy.wrap(tabCases).each((index) => {
        cy.get("#" + index).click();
      });
      cy.get("#btn_reset").click();
      cy.get("#messages").should("have.text", "Joueur 1, à toi de jouer !");
      cy.get("#score").should("have.text", "X : 1 - O : 0");
    })
  });
  