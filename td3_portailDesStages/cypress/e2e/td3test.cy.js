const tabEntreprise = [];
const tabPays = [];
const tabSAD = [];
const tabMotCle = [];
const tabVille = [];

describe("Catégorie : interactions de base", () => {
  beforeEach(() => {
    cy.visit(
      "https://dptinfo.iutmetz.univ-lorraine.fr/applis/stages/login.php"
    );
    cy.get("#login").type("yselhaoui48");
    cy.get("#psw").type("Syst1597");
    cy.get("form").submit();
    cy.visit(
      "https://dptinfo.iutmetz.univ-lorraine.fr/applis/stages/stages_historique.php"
    );
  }),
    it("Recherche par mot clés", () => {
      cy.get("#MotCleValue").select("SQL");
      cy.get("#MotCle1Value").select("PHP");
      cy.get("form").submit();


      cy.get("#result > div > div > table > tbody > tr").each((row, rowindex) => {
        if(rowindex % 2 === 0) {
        cy.wrap(row).within(() => {
          cy.get("td:not(:last-child)").each((celldata) => {
            tabMotCle.push(celldata.text());
          });
        });
      }
      });
    });

  it("Recherche par ville", () => {
    cy.get("#VilleValue").select("Woippy");
    cy.get("form").submit();
    cy.get("#result > div > div > table > tbody > tr").each((row, rowindex) => {
      if(rowindex % 2 === 0) {
      cy.wrap(row).within(() => {
        cy.get("td:not(:last-child)").each((celldata) => {
          tabVille.push(celldata.text());
        });
      });
    }
    });
  });

  it("Recherche par entreprise", () => {
    cy.get("#EntrepriseValue").select("Acta");
    cy.get("form").submit();

    cy.get("#result > div > div > table > tbody > tr").each((row, rowindex) => {
      if(rowindex % 2 === 0) {
      cy.wrap(row).within(() => {
        cy.get("td:not(:last-child)").each((celldata) => {
          tabEntreprise.push(celldata.text());
        });
      });
    }
    });
  });

  it("Recherche par pays", () => {
    cy.get("#PaysValue").select("Canada");
    cy.get("form").submit();

    cy.get("#result > div > div > table > tbody > tr").each((row, rowindex) => {
      if(rowindex % 2 === 0) {
      cy.wrap(row).within(() => {
        cy.get("td:not(:last-child)").each((celldata) => {
          tabPays.push(celldata.text());
        });
      });
    }
    });
  });

  it("Recherche par section, année et département", () => {
    cy.get("#SectionValue").select("BUT2RA");
    cy.get("#AnneeValue").select("2023");
    cy.get("#CPValue").select("57");
    cy.get("form").submit();

    cy.get("#result > div > div > table > tbody > tr:nth-child(3)").each((row, rowindex) => {
      if(rowindex % 2 === 0) {
      cy.wrap(row).within(() => {
        cy.get("td:not(:last-child)").each((celldata) => {
          tabSAD.push(celldata.text());
        });
      });
    }
    });
    
  });


  after(() => {
    cy.visit({
      url: 'http://localhost/BUT2A/DevWeb/td3_portailStages/tests_fonctionnels/vue/resultatRecherche.php',
      method: 'POST',
      body: {
        entreprise: tabEntreprise,
        pays: tabPays,
        sad: tabSAD,
        motCle: tabMotCle,
        ville: tabVille,
      },
    })
  });
});
