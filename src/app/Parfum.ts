export class Parfum {
      constructor(private _id:string,private _nommarque:string,
        private _nom:string,private _categorie:string,
        private _type:string,private _taille:number,
        private _prix:number,private _promo:boolean,
        private _prixAvantPromo:number,private _datefabrication:string,
        private _photo:string)
      {}      
      public get promo():boolean {
        return this._promo;
      }
      public set promo(value: boolean) {
        this._promo=value;
      }
      public get id(): string {
        return this._id;
    }
    public set id(value: string) {
        this._id = value;
    }
    public get nommarque (): string {
        return this._nommarque;
    }
    public set nommarque(value:string) {
        this._nommarque=value;
    }
    public get nom (): string {
      return this._nom;
    }
    public set nom(value:string) {
      this._nom=value;
    }
    public get categorie(): string {
      return this._categorie;
    }
    public set categorie(value: string) {
      this._categorie = value;
    }
    public get type(): string {
      return this._type;
    }
    public set type(value: string) {
      this._type = value;
    }
    public get taille (): number {
        return this._taille;
    }
    public set taille(value:number) {
        this._taille=value;
    }
    public get prix (): number {
      return this._prix;
  }
  public set prix(value:number) {
      this._prix=value;
  }
  
  public get prixAvantPromo (): number {
    return this._prixAvantPromo;
}
public set prixAvantPromo(value:number) {
    this._prixAvantPromo=value;
}
    public get photo (): string {
        return this._photo;
    }
    public set photo(value:string) {
        this._photo=value;
    }
    public get datefabrication (): string {
      return this._datefabrication;
  }
  public set datefabrication(value:string) {
      this._datefabrication=value;
  }
    }