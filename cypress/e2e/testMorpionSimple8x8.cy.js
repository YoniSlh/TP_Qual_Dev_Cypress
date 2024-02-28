describe("Catégorie : Gestion de la victoire en 'Simple' (8x8)", () => {
  beforeEach(() => {
    cy.visit("/morpion.html");
    cy.get("#simple").click();
    cy.get("#taille").clear();
    cy.get("#taille").type("8");
    const tabCases = [11, 12, 13, 21, 22, 23, 31, 32, 33]; // match nul pour pouvoir rejouer
    cy.wrap(tabCases).each((index) => {
      cy.get("#" + index).click();
    });
    cy.get("#btn_reset").click();
  }),
    it("Test 2.15 : Victoire avec diagonale principale (8x8)", () => {
      const tabCases = [33, 34, 44, 34, 54, 55];
      cy.wrap(tabCases).each((index) => {
        cy.get("#" + index).click();
      });
      cy.get("#messages").should("have.text", "Le joueur 1 a gagné !");
      cy.get("#score").should("have.text", "X : 2 - O : 0");
    });

  it("Test 2.16 : Victoire avec colonne 1 (8x8)", () => {
    const tabCases = [21, 12, 31, 22, 41, 23];
    cy.wrap(tabCases).each((index) => {
      cy.get("#" + index).click();
    });
    cy.get("#messages").should("have.text", "Le joueur 1 a gagné !");
    cy.get("#score").should("have.text", "X : 2 - O : 0");
  });

  it("Test 2.17 : Victoire avec colonne 4 (8x8)", () => {
    const tabCases = [24, 11, 34, 13, 44, 22];
    cy.wrap(tabCases).each((index) => {
      cy.get("#" + index).click();
    });
    cy.get("#messages").should("have.text", "Le joueur 1 a gagné !");
    cy.get("#score").should("have.text", "X : 2 - O : 0");
  });

  it("Test 2.18 : Victoire avec colonne 8 (8x8)", () => {
    const tabCases = [38, 31, 48, 32, 58, 23];
    cy.wrap(tabCases).each((index) => {
      cy.get("#" + index).click();
    });
    cy.get("#messages").should("have.text", "Le joueur 1 a gagné !");
    cy.get("#score").should("have.text", "X : 2 - O : 0");
  });

  it("Test 2.19 : Victoire avec ligne 1 (8x8)", () => {
    const tabCases = [11, 21, 12, 33, 13, 23];
    cy.wrap(tabCases).each((index) => {
      cy.get("#" + index).click();
    });
    cy.get("#messages").should("have.text", "Le joueur 1 a gagné !");
    cy.get("#score").should("have.text", "X : 2 - O : 0");
  });

  it("Test 2.20 : Victoire avec ligne 4 (8x8)", () => {
    const tabCases = [41, 11, 42, 45, 43, 31];
    cy.wrap(tabCases).each((index) => {
      cy.get("#" + index).click();
    });
    cy.get("#messages").should("have.text", "Le joueur 1 a gagné !");
    cy.get("#score").should("have.text", "X : 2 - O : 0");
  });

  it("Test 2.21 : Victoire avec ligne 8 (8x8)", () => {
    const tabCases = [81, 11, 82, 24, 83, 32];
    cy.wrap(tabCases).each((index) => {
      cy.get("#" + index).click();
    });
    cy.get("#messages").should("have.text", "Le joueur 1 a gagné !");
    cy.get("#score").should("have.text", "X : 2 - O : 0");
  });
});
