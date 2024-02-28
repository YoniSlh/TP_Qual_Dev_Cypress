import { Enonce } from "./Enonce.ts";
import { ITraduisible } from "./ITraduisible.ts";

export class Proposition implements ITraduisible {

    /*
    @param enonce : l'énoncé de la question
    @param precisionDemandee : indique si une précision est demandée
    */
    private _enonce : Enonce;
    private _precisionDemandee : boolean;

    constructor(enonce : Enonce, precisionDemandee : boolean) {
        this._enonce = enonce;
        this._precisionDemandee = precisionDemandee;
    }

    set enonce(enonce : Enonce) {
        /*
        @param enonce : l'énoncé de la question
        */

        this._enonce = enonce;
    }

    get enonce() : Enonce {
        return this._enonce;
    }

    set precisionDemandee(precisionDemandee : boolean) {
        /*
        @param precisionDemandee : indique si une précision est demandée
        */

        this._precisionDemandee = precisionDemandee;
    }
    
    get precisionDemandee() : boolean {
        return this._precisionDemandee;
    }

    public traduire() : ITraduisible {
        return new Proposition(this._enonce.traduire(), this._precisionDemandee);
    }

    public toString() : string {
        return "Proposition " + this._enonce.toString() + (this._precisionDemandee ? " (avec précision)" : "");
    }

}