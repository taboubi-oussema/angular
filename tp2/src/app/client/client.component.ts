import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css'],
})
export class ClientComponent {
  @Input() nom: string;
  @Input() age: any;
  lesadresses: string[];
  pathImage: string;
  couleur: string;
  c1: string | undefined;
  prixAchats: number[];
  active: boolean;
  solde: number;

  constructor() {
    this.nom = 'ali';
    this.age = 30;
    this.pathImage = '../../assets/image.jpeg';
    this.lesadresses = ['tunis', 'béja', 'sousse'];
    this.couleur = 'red';
    this.prixAchats = [123.5, 33, 200.5, 100];
    this.active = true;
    this.solde = -50;
  }

  afficher() {
    var t: string;
    t = 'je suis' + this.nom + '\n et mon age est ' + this.age + ' ans';
    alert(t);
  }
  changerCouleur(c: HTMLSelectElement) {
    this.couleur = c.value;
  }
  changerAge(age: HTMLInputElement) {
    let a: number;
    a = parseInt(age.value, 10);
    if (a > 0) {
      this.age = a;
    } else {
      alert('valeur age erronee');
    }
  }
}
