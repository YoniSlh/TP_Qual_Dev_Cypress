import { ITraduisible } from "./ITraduisible.ts";

export class Enonce implements ITraduisible {

    private _enonce! : string;

    public constructor(enonce : string) {
        /*
        @param enonce : l'énoncé de la question
        */

        this.enonce = enonce;
    }

    public get enonce() : string {
        /*
        @param enonce : l'énoncé de la question
        */

        return this._enonce;
    }

    public set enonce(enonce : string) {
        /*
        @param enonce : l'énoncé de la question
        @throws erreur si l'énoncé contient moins de 10 caractères
        */

        enonce = enonce.trim();
        if (enonce.length < 10) {
            throw new Error("L'énoncé doit contenir au moins 10 caractères");
        }
        this._enonce = enonce;
    }

    traduire() : Enonce {
        return new Enonce(this._enonce.split('').reverse().join(''));
    }

    public toString() : string {
        /*
        @return l'énoncé de la question
        */

        return this._enonce;
    }
}