import { Enonce } from "./Enonce.ts";
import { Proposition } from "./Proposition.ts";
import { Question } from "./Question.ts";

export class QuestionFermee extends Question {
    /*
    @param numero : le numéro de la question
    @param enonce : l'énoncé de la question
    @param propositions : les propositions de la question
    */
    private _propositions! : Proposition[];

    constructor(numero:number, enonce : Enonce, propositions : Proposition[]) {
        super(numero, enonce);
        this.propositions = propositions;
    }

    get propositions() : Proposition[] {
        return this._propositions;
    }

    set propositions(propositions : Proposition[]) {
        /*
        @param propositions : les propositions de la question
        @throws erreur si le tableau est vide
        */
        if (propositions.length === 0) {
            throw new Error("Il faut au moins une proposition");
        }

        this._propositions = propositions;
    }

    public traduire() : QuestionFermee {
        return new QuestionFermee(this.numero, this.enonce.traduire(), this._propositions.map(
            (p:Proposition) => p.traduire() as Proposition));
    }

    public toString() : string {
        return this._propositions.reduce((acc:string, p:Proposition) => acc + "\t" + p.toString() + "\n", super.toString().replace("ouverte", "fermée"));
    }   
}