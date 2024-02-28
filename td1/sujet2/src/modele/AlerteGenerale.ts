import { ICryptable } from "./ICryptable.ts";
import { Interlocuteur } from "./Interlocuteur.ts";

export class AlerteGenerale implements ICryptable {

    /*
    @param expediteur : l'expéditeur du message
    @param texte : le texte du message

    @remarks Classe représentant une alerte générale
    */

    private _expediteur! : Interlocuteur;
    private _texte! : string;

    public constructor(expediteur : Interlocuteur, texte : string) {
        this.expediteur = expediteur;
        this.texte = texte;
    }

    get expediteur() : Interlocuteur {
        return this._expediteur;
    }

    set expediteur(expediteur : Interlocuteur) {
        this._expediteur = expediteur;
    }

    get texte() : string {
        return this._texte;
    }

    set texte(texte : string) {
        texte = texte.trim();
        if (texte.length < 10) {
            throw new Error("Le texte doit contenir au moins 8 caractères");
        }
        this._texte = texte;
    }

    crypte() : AlerteGenerale {
        /*
        @param crypte : le texte crypté du message
        @return une copie de l'alerte générale dont le texte est crypté
        */
        const crypte = this._texte.split('').map((c:string) => String.fromCharCode(c.charCodeAt(0) + 1)).join('');
        return new AlerteGenerale(this.expediteur.crypte() as Interlocuteur, crypte);
    }

    public toString() : string {
        return "Message de " + this._expediteur.toString() + " : " + this._texte + " (alerte générale)";
    }
}