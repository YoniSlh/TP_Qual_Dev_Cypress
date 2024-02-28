import { AlerteGenerale } from "../modele/AlerteGenerale.ts";
import { Interlocuteur } from "../modele/Interlocuteur.ts";
import { MessagePersonnel } from "../modele/MessagePersonnel.ts";
import {litChaine, litEntier} from "../utils/Saisie.ts";

function saisieMessages() : AlerteGenerale[] {
    /*
    @param liste : la liste des messages saisies
    @param reponse : type de message à saisir
    @return la liste des messages saisis
    @remarks Fonction pour saisir une liste de messages
    */
  
    const liste : AlerteGenerale[] = [];
  
    let reponse : string;
    do {

      liste.push(saisieMessage());
      reponse = litChaine("Voulez-vous saisir un autre message ? (o/n) : ").toUpperCase();
    } while (reponse!=="N");
    return liste;
  }

function saisieMessage() : AlerteGenerale {

  /*
  @param reponse : type de message à saisir
  @param expediteur : l'expéditeur du message
  @param message : le message saisi
  @param ok : booléen pour vérifier la saisie
  @param m : le message saisi
  @return le message saisi

  @remarks Fonction pour saisir un message
  */

  console.log("Saisie d'un nouveau message");
  let m : AlerteGenerale;

  let reponse : string;
  let expediteur : Interlocuteur;
  let ok : boolean;
  do {
    ok =true;
    try {
      expediteur = new Interlocuteur(litChaine("Veuillez saisir l'adresse email de l'expéditeur : "));
    } catch (e) {
      console.log((e as Error).message);
      ok = false;
    } 
  } while (!ok);
  
  do {    
    reponse = litChaine("Quel type de message voulez-vous saisir ? (a/p) : ").toUpperCase();
  } while (reponse!=="A" && reponse!=="P");

  let message : string;
  do {
    ok = true;
    try {
      message = litChaine("Veuillez saisir le message : ");

      if (reponse==="P") {
        m = saisieMessagePersonnel(expediteur!, message!);
      } else {
        m = new AlerteGenerale(expediteur!, message!);
      }
    
    } catch (e) {
      console.log((e as Error).message);
      ok = false;
    }
  } while (!ok);


  return m!;
}


function saisieMessagePersonnel(expediteur : Interlocuteur, texte : string) : MessagePersonnel {
  /* 
  @param expediteur : l'expéditeur du message
  @param texte : le texte du message
  @param nbDestinataires : le nombre de destinataires du message
  @param destinataires : la liste des destinataires du message
  @param sDestinataire : l'email du destinataire
  @param m : le message saisi
  @return le message saisi
  @remarks Fonction pour saisir un message personnel
  */

  let m : MessagePersonnel;
  let ok : boolean; 
  do {
    ok = true;
    try {
      const nbDestinataires = litEntier("Combien de destinataires voulez-vous saisir ? ");  
      const destinataires : Interlocuteur[] = [];
      for (let i = 0; i < nbDestinataires; i++) {
        const sDestinataire = litChaine(`Veuillez saisir l'email du destinataire ${i+1} : `)   
        destinataires.push(new Interlocuteur(sDestinataire));
      }
      m = new MessagePersonnel(expediteur, texte, destinataires);
    } catch (e) {
      console.log((e as Error).message);
      ok = false;
    }
  } while (!ok);
  
  return m!;
}

/*
@param msgs : la liste des messages à afficher
*/

const msgs = saisieMessages();

console.log("\nVoici les message saisis :\n");
for (const m of msgs) {
  console.log(m.toString());
}

console.log("\nVoici les messages cryptés :\n");
for (const m of msgs) {
  console.log(m.crypte().toString());
}
