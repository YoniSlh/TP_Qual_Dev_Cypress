describe("Catégorie : Gestion de la victoire du joueur 2", () => {
    beforeEach(() => {
      cy.visit("/morpion.html");
    }),
      it("Test 1.Bis : Victoire avec ligne 1 (3x3)    ", () => {
        const tabCases = [21, 11, 22, 13, 31, 12];
        cy.wrap(tabCases).each((index) => {
          cy.get("#" + index).click();
        });
        cy.get("#messages").should("have.text", "Le joueur 2 a gagné !");
        cy.get("#score").should("have.text", "X : 0 - O : 1");
      });
      it("Test 2.Bis : Victoire avec colonne 1 (3x3)    ", () => {
        const tabCases = [12, 11, 23, 21, 13, 31];
        cy.wrap(tabCases).each((index) => {
          cy.get("#" + index).click();
        });
        cy.get("#messages").should("have.text", "Le joueur 2 a gagné !");
        cy.get("#score").should("have.text", "X : 0 - O : 1");
      });
  });

describe("Catégorie : Gestion de la victoire en 'Simple' (3x3)", () => {
    beforeEach(() => {
      cy.visit("/morpion.html");
        }),
      it("Test 2.1 : Victoire avec diagonale (3x3)", () => {
        const tabCases = [11, 12, 22, 13, 33];
        cy.wrap(tabCases).each((index) => {
          cy.get("#" + index).click();
        });
        cy.get("#messages").should("have.text", "Le joueur 1 a gagné !");
        cy.get("#score").should("have.text", "X : 1 - O : 0");
      }),
      it("Test 2.2 : Victoire avec colonne 1 (3x3)", () => {
        const tabCases = [11, 12, 21, 22, 31];
        cy.wrap(tabCases).each((index) => {
          cy.get("#" + index).click();
        });
        cy.get("#messages").should("have.text", "Le joueur 1 a gagné !");
        cy.get("#score").should("have.text", "X : 1 - O : 0");
      }),
      it("Test 2.3 : Victoire avec colonne 2 (3x3)", () => {
        const tabCases = [12, 11, 22, 13, 32];
        cy.wrap(tabCases).each((index) => {
          cy.get("#" + index).click();
        });
        cy.get("#messages").should("have.text", "Le joueur 1 a gagné !");
        cy.get("#score").should("have.text", "X : 1 - O : 0");
      });
    
      it("Test 2.4 : Victoire avec colonne 3 (3x3)", () => {
        const tabCases = [13, 11, 23, 12, 33];
        cy.wrap(tabCases).each((index) => {
          cy.get("#" + index).click();
        });
        cy.get("#messages").should("have.text", "Le joueur 1 a gagné !");
        cy.get("#score").should("have.text", "X : 1 - O : 0");
      });
    
      it("Test 2.5 : Victoire avec ligne 1 (3x3)", () => {
        const tabCases = [11, 21, 12, 22, 13];
        cy.wrap(tabCases).each((index) => {
          cy.get("#" + index).click();
        });
        cy.get("#messages").should("have.text", "Le joueur 1 a gagné !");
        cy.get("#score").should("have.text", "X : 1 - O : 0");
      });
    
      it("Test 2.6 : Victoire avec ligne 2 (3x3)", () => {
        const tabCases = [21, 11, 22, 12, 23];
        cy.wrap(tabCases).each((index) => {
          cy.get("#" + index).click();
        });
        cy.get("#messages").should("have.text", "Le joueur 1 a gagné !");
        cy.get("#score").should("have.text", "X : 1 - O : 0");
      });
    
      it("Test 2.7 : Victoire avec ligne 3 (3x3)", () => {
        const tabCases = [31, 11, 32, 13, 33];
        cy.wrap(tabCases).each((index) => {
          cy.get("#" + index).click();
        });
        cy.get("#messages").should("have.text", "Le joueur 1 a gagné !");
        cy.get("#score").should("have.text", "X : 1 - O : 0");
      });
  });
