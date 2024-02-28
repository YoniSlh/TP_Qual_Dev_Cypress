import { ICryptable } from "./ICryptable.ts";

export class Interlocuteur implements ICryptable {

    /*
    @param email : l'email de l'interlocuteur
    */

    private _email! : string;
    
    constructor(email : string) {
        this.email = email;
    }

    get email() : string {
        return this._email;
    }

    set email(email : string) {
        /*
        @param email : l'email de l'interlocuteur
        @throws erreur si l'email ne contient pas au moins 8 caractères ou ne contient pas de @
        */
        email = email.trim();
        if (email.length < 8 || email.indexOf("@")===-1) {
            throw new Error("L'email est incorrect : il doit contenir au moins 8 caractères et contenir un @");        
        }

        this._email = email;
    }

    public crypte() : Interlocuteur {
        /*
        @param crypte : l'email crypté de l'interlocuteur
        @return une copie de l'interlocuteur dont l'email est crypté
        */

        const crypte = this._email.split('').map((c:string) => c==="@"?"@":String.fromCharCode(c.charCodeAt(0) + 1)).join('');
        return new Interlocuteur(crypte);
    }

    public toString() : string {
        return this._email;
    }

}