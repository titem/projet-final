export class Personne {
  public id: number;
  public nom: string;
  public prenom: string;
  public email: string;
  public tel: string;
  public profession: string;
  public ville: string;
  public img: string;


constructor(id , nom, prenom, email, tel, profession, ville, img){
  this.id =  id;
  this.nom = nom;
  this.prenom = prenom;
  this.email = email;
  this.tel = tel;
  this.profession = profession;
  this.ville = ville;
  this.img = img;
}
}
