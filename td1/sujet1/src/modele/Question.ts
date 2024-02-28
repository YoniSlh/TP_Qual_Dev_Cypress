import { Enonce } from "./Enonce.ts";
import { ITraduisible } from "./ITraduisible.ts";

export class Question implements ITraduisible {
    /*
    @param numero : le numéro de la question
    @param enonce : l'énoncé de la question
    */

  private _numero!: number;
  private _enonce: Enonce;

  public constructor(numero: number, enonce: Enonce) {
    this.numero = numero;
    this._enonce = enonce;
  }

  get numero(): number {
    return this._numero;
  }

  set numero(numero: number) {
    /*
        @param numero : le numéro de la question
        @throws erreur si le numéro est négatif
        */

    if (numero < 0) {
      throw new Error("Le numéro de la question doit être positif");
    }
    this._numero = numero;
  }

  get enonce(): Enonce {
    return this._enonce;
  }

  set enonce(enonce: Enonce) {
    this._enonce = enonce;
  }

  traduire(): Question {
    return new Question(this.numero, this.enonce.traduire());
  }

  public toString(): string {
    return (
      "Question n° " +
      this._numero +
      " : " +
      this._enonce.toString() +
      " (ouverte)"
    );
  }
}
