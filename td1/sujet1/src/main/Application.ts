import {litChaine, litEntier} from "../utils/Saisie.ts";
import { Question } from "../modele/Question.ts";
import { Enonce } from "../modele/Enonce.ts";
import { QuestionFermee } from "../modele/QuestionFermee.ts";
import { Proposition } from "../modele/Proposition.ts";

function saisieQuestionnaire() : Question[] {
    /*
    @param q : la liste des questions saisies
    @return la liste des questions saisies
    @remarks Fonction pour saisir une liste de questions
    */
    const q : Question[] = [];
  
    let reponse : string;
    let noQuestion = 1;
    do {

      q.push(saisieQuestion(noQuestion++));
      reponse = litChaine("Voulez-vous saisir une autre question ? (o/n) : ");
    } while (reponse.toUpperCase()!=="N");
    return q;
  }

function saisieQuestion(no : number) : Question {

  /*
  @param no : numéro de la question à saisir
  @param q : la question saisie
  @param reponse : type de question à saisir
  @return la question saisie
  */

  console.log("Saisie de la question n°" + no);
  let q : Question;

  let reponse : string;
  do {
    reponse = litChaine("Quel type de question voulez-vous saisir ? (o/f) : ").toUpperCase();
  } while (reponse!=="O" && reponse!=="F");

  if (reponse==="O") {
    q = saisieQuestionOuverte(no);
  } else {
    q = saisieQuestionFermee(no);
  }

  return q;
}

function saisieQuestionOuverte(no : number) : Question {

  /*
  @param no : numéro de la question à saisir
  @return la question saisie
  */

  let q : Question;
  let enonce : string;
  let ok : boolean; 
  do {
    ok = true;
    enonce = litChaine("Veuillez saisir l'énoncé de la question : ");
    try {
      q = new Question(no, new Enonce(enonce));
    } catch (e) {
      console.log((e as Error).message);
      ok = false;
    }
  } while (!ok);
  
  return q!;
}

function saisieQuestionFermee(no : number) : Question {

  /*
  @param no : numéro de la question à saisir
  @param q : la question saisie
  @param sEnonce : l'énoncé de la question
  @param enonce : l'énoncé de la question de type Enonce
  @param ok : indique si la saisie est correcte
  @return la question saisie
  */

  let q : Question;
  let sEnonce : string;
  let enonce : Enonce;
  let ok : boolean; 
  do {
    ok = true;
    sEnonce = litChaine("Veuillez saisir l'énoncé de la question : ");
    try {
      enonce = new Enonce(sEnonce);
      const nbPropositions = litEntier("Combien de propositions voulez-vous saisir ? ");  
      const propositions : Proposition[] = [];
      for (let i = 0; i < nbPropositions; i++) {
        const sProposition = litChaine(`Veuillez saisir la proposition ${i+1} : `)   
        const precision = litChaine("Voulez-vous une précision pour cette proposition ? (o/n) : ").toUpperCase()==="O";
        propositions.push(new Proposition(new Enonce(sProposition), precision));
      }
      q = new QuestionFermee(no, enonce, propositions);
    } catch (e) {
      console.log((e as Error).message);
      ok = false;
    }
  } while (!ok);
  
  return q!;
}

const q = saisieQuestionnaire();

console.log("\nVoici les questions saisies :\n");
for (const question of q) {
  console.log(question.toString());
}

console.log("\nVoici les questions traduites :\n");
for (const question of q) {
  console.log(question.traduire().toString());
}
