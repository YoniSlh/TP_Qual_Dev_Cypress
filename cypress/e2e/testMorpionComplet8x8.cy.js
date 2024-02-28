describe("Catégorie : Gestion de la victoire en 'Complet' (8x8)", () => {
  beforeEach(() => {
    cy.visit("/morpion.html");
    cy.get("#complet").click();
    cy.get("#taille").clear();
    cy.get("#taille").type("8");
    const tabCases = [11, 12, 13, 21, 22, 23, 31, 32, 33]; // match nul pour pouvoir rejouer
    cy.wrap(tabCases).each((index) => {
      cy.get("#" + index).click();
    });
    cy.get("#btn_reset").click();
  }),
  it("Test 3.15 : Victoire avec diagonale principale (8x8)", () => {
    const tabCases = [11, 14, 22, 24, 33, 34, 44, 34, 54, 55, 64, 66, 74, 77, 84, 88];
    cy.wrap(tabCases).each((index) => {
      cy.get("#" + index).click();
    });
    cy.get("#messages").should("have.text", "Le joueur 1 a gagné !");
    cy.get("#score").should("have.text", "X : 2 - O : 0");
  });

it("Test 3.16 : Victoire avec colonne 1 (8x8)", () => {
  const tabCases = [11, 14, 21, 12, 31, 22, 41, 23, 51, 24, 61, 25, 71, 26, 81, 27];
  cy.wrap(tabCases).each((index) => {
    cy.get("#" + index).click();
  });
  cy.get("#messages").should("have.text", "Le joueur 1 a gagné !");
  cy.get("#score").should("have.text", "X : 2 - O : 0");
});

it("Test 3.17 : Victoire avec colonne 4 (8x8)", () => {
  const tabCases = [14, 12, 24, 11, 34, 13, 44, 22, 54, 33, 64, 44, 55, 74, 66, 84];
  cy.wrap(tabCases).each((index) => {
    cy.get("#" + index).click();
  });
  cy.get("#messages").should("have.text", "Le joueur 1 a gagné !");
  cy.get("#score").should("have.text", "X : 2 - O : 0");
});

it("Test 3.18 : Victoire avec colonne 8 (8x8)", () => {
  const tabCases = [18, 12, 28, 11, 38, 13, 48, 22, 58, 33, 68, 44, 78, 74, 88, 84];
  cy.wrap(tabCases).each((index) => {
    cy.get("#" + index).click();
  });
  cy.get("#messages").should("have.text", "Le joueur 1 a gagné !");
  cy.get("#score").should("have.text", "X : 2 - O : 0");
});

it("Test 3.19 : Victoire avec ligne 1 (8x8)", () => {
  const tabCases = [11, 21, 12, 33, 13, 23, 14, 31, 15, 41, 16, 51, 17, 61, 18, 71];
  cy.wrap(tabCases).each((index) => {
    cy.get("#" + index).click();
  });
  cy.get("#messages").should("have.text", "Le joueur 1 a gagné !");
  cy.get("#score").should("have.text", "X : 2 - O : 0");
});

it("Test 3.20 : Victoire avec ligne 4 (8x8)", () => {
  const tabCases = [41, 21, 42, 65, 43, 31, 44, 55, 45, 66, 46, 77, 47, 88, 48, 81];
  cy.wrap(tabCases).each((index) => {
    cy.get("#" + index).click();
  });
  cy.get("#messages").should("have.text", "Le joueur 1 a gagné !");
  cy.get("#score").should("have.text", "X : 2 - O : 0");
});

it("Test 3.21 : Victoire avec ligne 8 (8x8)", () => {
  const tabCases = [81, 21, 82, 45, 83, 32, 84, 55, 85, 66, 86, 77, 87, 48, 88, 41];
  cy.wrap(tabCases).each((index) => {
    cy.get("#" + index).click();
  });
  cy.get("#messages").should("have.text", "Le joueur 1 a gagné !");
  cy.get("#score").should("have.text", "X : 2 - O : 0");
});
});
