describe("Catégorie : Gestion de la victoire en 'Complet' (3x3)", () => {
    beforeEach(() => {
      cy.visit("/morpion.html");
      cy.get("#complet").click();
      cy.get("#taille").clear();
      cy.get("#taille").type("3");
      const tabCases = [11, 12, 13, 21, 22, 23, 31, 32, 33]; // match nul pour pouvoir rejouer
      cy.wrap(tabCases).each((index) => {
        cy.get("#" + index).click();
      });
      cy.get("#btn_reset").click();
    }),
      it("Test 3.1 : Victoire avec diagonale principale (3x3)", () => {
        const tabCases = [11, 12, 22, 13, 33];
        cy.wrap(tabCases).each((index) => {
          cy.get("#" + index).click();
        });
        cy.get("#messages").should("have.text", "Le joueur 1 a gagné !");
        cy.get("#score").should("have.text", "X : 2 - O : 0");
      });
  
    it("Test 3.2 : Victoire avec colonne 1 (3x3)", () => {
        const tabCases = [11, 12, 21, 22, 31];
      cy.wrap(tabCases).each((index) => {
        cy.get("#" + index).click();
      });
      cy.get("#messages").should("have.text", "Le joueur 1 a gagné !");
      cy.get("#score").should("have.text", "X : 2 - O : 0");
    });
  
    it("Test 3.3 : Victoire avec colonne 2 (3x3)", () => {
        const tabCases = [12, 11, 22, 13, 32];
      cy.wrap(tabCases).each((index) => {
        cy.get("#" + index).click();
      });
      cy.get("#messages").should("have.text", "Le joueur 1 a gagné !");
      cy.get("#score").should("have.text", "X : 2 - O : 0");
    });
  
    it("Test 3.4 : Victoire avec colonne 3 (3x3)", () => {
        const tabCases = [13, 11, 23, 12, 33];
      cy.wrap(tabCases).each((index) => {
        cy.get("#" + index).click();
      });
      cy.get("#messages").should("have.text", "Le joueur 1 a gagné !");
      cy.get("#score").should("have.text", "X : 2 - O : 0");
    });
  
    it("Test 3.5 : Victoire avec ligne 1 (3x3)", () => {
        const tabCases = [11, 21, 12, 22, 13];
      cy.wrap(tabCases).each((index) => {
        cy.get("#" + index).click();
      });
      cy.get("#messages").should("have.text", "Le joueur 1 a gagné !");
      cy.get("#score").should("have.text", "X : 2 - O : 0");
    });
  
    it("Test 3.6 : Victoire avec ligne 2 (3x3)", () => {
        const tabCases = [21, 11, 22, 12, 23];
      cy.wrap(tabCases).each((index) => {
        cy.get("#" + index).click();
      });
      cy.get("#messages").should("have.text", "Le joueur 1 a gagné !");
      cy.get("#score").should("have.text", "X : 2 - O : 0");
    });
  
    it("Test 3.7 : Victoire avec ligne 3 (3x3)", () => {
        const tabCases = [31, 11, 32, 13, 33];
      cy.wrap(tabCases).each((index) => {
        cy.get("#" + index).click();
      });
      cy.get("#messages").should("have.text", "Le joueur 1 a gagné !");
      cy.get("#score").should("have.text", "X : 2 - O : 0");
    });
  });
  