describe("Catégorie : Gestion de la victoire en 'Simple' (5x5)", () => {
    beforeEach(() => {
      cy.visit("/morpion.html");
      cy.get("#simple").click();
      cy.get("#taille").clear();
      cy.get("#taille").type("5");
      const tabCases = [11, 12, 13, 21, 22, 23, 31, 32, 33]; // match nul pour pouvoir rejouer
      cy.wrap(tabCases).each((index) => {
        cy.get("#" + index).click();
      });
      cy.get("#btn_reset").click();
    }),
      it("Test 2.15 : Victoire avec diagonale principale (5x5)", () => {
        const tabCases = [33, 34, 44, 45, 55, 54];
        cy.wrap(tabCases).each((index) => {
          cy.get("#" + index).click();
        });
        cy.get("#messages").should("have.text", "Le joueur 1 a gagné !");
        cy.get("#score").should("have.text", "X : 2 - O : 0");
      });
  
    it("Test 2.16 : Victoire avec colonne 1 (5x5)", () => {
      const tabCases = [21, 12, 31, 22, 41, 23];
      cy.wrap(tabCases).each((index) => {
        cy.get("#" + index).click();
      });
      cy.get("#messages").should("have.text", "Le joueur 1 a gagné !");
      cy.get("#score").should("have.text", "X : 2 - O : 0");
    });
  
    it("Test 2.17 : Victoire avec colonne 3 (5x5)", () => {
      const tabCases = [33, 11, 43, 13, 53, 22];
      cy.wrap(tabCases).each((index) => {
        cy.get("#" + index).click();
      });
      cy.get("#messages").should("have.text", "Le joueur 1 a gagné !");
      cy.get("#score").should("have.text", "X : 2 - O : 0");
    });
  
    it("Test 2.18 : Victoire avec colonne 5 (5x5)", () => {
      const tabCases = [35, 31, 45, 32, 55, 23];
      cy.wrap(tabCases).each((index) => {
        cy.get("#" + index).click();
      });
      cy.get("#messages").should("have.text", "Le joueur 1 a gagné !");
      cy.get("#score").should("have.text", "X : 2 - O : 0");
    });
  
    it("Test 2.19 : Victoire avec ligne 1 (5x5)", () => {
      const tabCases = [11, 21, 12, 33, 13, 23];
      cy.wrap(tabCases).each((index) => {
        cy.get("#" + index).click();
      });
      cy.get("#messages").should("have.text", "Le joueur 1 a gagné !");
      cy.get("#score").should("have.text", "X : 2 - O : 0");
    });
  
    it("Test 2.20 : Victoire avec ligne 3 (5x5)", () => {
      const tabCases = [31, 11, 32, 45, 33, 31];
      cy.wrap(tabCases).each((index) => {
        cy.get("#" + index).click();
      });
      cy.get("#messages").should("have.text", "Le joueur 1 a gagné !");
      cy.get("#score").should("have.text", "X : 2 - O : 0");
    });
  
    it("Test 2.21 : Victoire avec ligne 5 (5x5)", () => {
      const tabCases = [51, 11, 52, 24, 53, 32];
      cy.wrap(tabCases).each((index) => {
        cy.get("#" + index).click();
      });
      cy.get("#messages").should("have.text", "Le joueur 1 a gagné !");
      cy.get("#score").should("have.text", "X : 2 - O : 0");
    });
  });
  