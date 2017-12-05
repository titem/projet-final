export class Personne {
  public id: number;
  public nom: string;
  public prenom: string;
  public email: string;
  public tel: string;
  public profession: string;
  public ville: string;
  public img: string;
  public passWord: string;

constructor( nom: string, prenom: string, email: string, tel: string, profession: string, ville: string, img: string, passWord: string) {
  this.nom = nom;
  this.prenom = prenom;
  this.email = email;
  this.tel = tel;
  this.profession = profession;
  this.ville = ville;
  this.img = img;
  this.passWord = passWord;
}
}
