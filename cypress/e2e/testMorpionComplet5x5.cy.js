describe("Catégorie : Gestion de la victoire en 'Complet' (5x5)", () => {
  beforeEach(() => {
    cy.visit("/morpion.html");
    cy.get("#complet").click();
    cy.get("#taille").clear();
    cy.get("#taille").type("5");
    const tabCases = [11, 12, 13, 21, 22, 23, 31, 32, 33]; // match nul pour pouvoir rejouer
    cy.wrap(tabCases).each((index) => {
      cy.get("#" + index).click();
    });
    cy.get("#btn_reset").click();
  }),
    it("Test 3.8 : Victoire avec diagonale principale (5x5)", () => {
      const tabCases = [11, 14, 22, 24, 33, 34, 44, 45, 55, 54];
      cy.wrap(tabCases).each((index) => {
        cy.get("#" + index).click();
      });
      cy.get("#messages").should("have.text", "Le joueur 1 a gagné !");
      cy.get("#score").should("have.text", "X : 2 - O : 0");
    });

  it("Test 3.9 : Victoire avec colonne 1 (5x5)", () => {
    const tabCases = [11, 33, 21, 12, 31, 22, 41, 23, 51, 44];
    cy.wrap(tabCases).each((index) => {
      cy.get("#" + index).click();
    });
    cy.get("#messages").should("have.text", "Le joueur 1 a gagné !");
    cy.get("#score").should("have.text", "X : 2 - O : 0");
  });

  it("Test 3.10 : Victoire avec colonne 3 (5x5)", () => {
    const tabCases = [13, 32, 23, 12, 33, 22, 43, 25, 53, 44];
    cy.wrap(tabCases).each((index) => {
      cy.get("#" + index).click();
    });
    cy.get("#messages").should("have.text", "Le joueur 1 a gagné !");
    cy.get("#score").should("have.text", "X : 2 - O : 0");
  });

  it("Test 3.11 : Victoire avec colonne 5 (5x5)", () => {
    const tabCases = [15, 32, 25, 12, 35, 22, 45, 24, 55, 44];
    cy.wrap(tabCases).each((index) => {
      cy.get("#" + index).click();
    });
    cy.get("#messages").should("have.text", "Le joueur 1 a gagné !");
    cy.get("#score").should("have.text", "X : 2 - O : 0");
  });

  it("Test 3.12 : Victoire avec ligne 1 (5x5)", () => {
    const tabCases = [11, 21, 12, 33, 13, 23, 14, 31, 15];
    cy.wrap(tabCases).each((index) => {
      cy.get("#" + index).click();
    });
    cy.get("#messages").should("have.text", "Le joueur 1 a gagné !");
    cy.get("#score").should("have.text", "X : 2 - O : 0");
  });

  it("Test 3.13 : Victoire avec ligne 3 (5x5)", () => {
    const tabCases = [31, 11, 32, 23, 33, 13, 34, 21, 35];
    cy.wrap(tabCases).each((index) => {
      cy.get("#" + index).click();
    });
    cy.get("#messages").should("have.text", "Le joueur 1 a gagné !");
    cy.get("#score").should("have.text", "X : 2 - O : 0");
  });

  it("Test 3.14 : Victoire avec ligne 5 (5x5)", () => {
    const tabCases = [51, 11, 52, 23, 53, 13, 54, 31, 55];
    cy.wrap(tabCases).each((index) => {
      cy.get("#" + index).click();
    });
    cy.get("#messages").should("have.text", "Le joueur 1 a gagné !");
    cy.get("#score").should("have.text", "X : 2 - O : 0");
  });
});
