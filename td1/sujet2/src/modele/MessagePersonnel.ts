import { Interlocuteur } from "./Interlocuteur.ts";
import { AlerteGenerale } from "./AlerteGenerale.ts";

export class MessagePersonnel extends AlerteGenerale {
    /*
    @param destinataires : la liste des destinataires du message
    */

    private _destinataires! : Interlocuteur[];

    constructor(expediteur:Interlocuteur, texte : string, destinataires : Interlocuteur[]) {
        super(expediteur, texte);
        this.destinataires = destinataires;
    }

    get destinataires() : Interlocuteur[] {
        return this._destinataires;
    }

    set destinataires(destinataires : Interlocuteur[]) {
        /*
        @throws erreur si la liste des destinataires est vide
        */

        if (destinataires.length === 0) {
            throw new Error("Il faut au moins un destinataire");
        }
        this._destinataires = destinataires;
    }

    public crypte() : MessagePersonnel {
        /*
        @param ag : le message personnel crypté
        @param p : un destinataire crypté
        @param crypte : le texte crypté du message
        @return une copie du message personnel dont le texte est crypté et dont les destinataires sont cryptés
        */
        const ag = super.crypte();
        return new MessagePersonnel(ag.expediteur, ag.texte, this._destinataires.map(
            (p:Interlocuteur) => p.crypte()));
    }

    public toString() : string {
        return this._destinataires.reduce((acc:string, p:Interlocuteur) => acc + "\tpour : " + p.toString() + "\n", super.toString().replace("alerte générale", "message personnel"));
    }   
}