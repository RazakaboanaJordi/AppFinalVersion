import { Injectable } from '@angular/core';

import { Item } from '../../models/item';

@Injectable()
export class Items {
  items: Item[] = [];

  defaultItem: any = {
    "name": "Burt Bear",
    "profilePic": "assets/img/speakers/bear.jpg",
    "about": "Burt is a Bear.",
  };


  constructor() {
    let items = [
      {
        "name": "Alcool",
        "profilePic": "assets/img/speakers/1.jpg",
        "about": "Désormais c’est 0,2 g d'alcool par litre de sang Désormais, le taux d’alcool autorisé est 0,2 g/l pour tous les permis probatoires. La réglementation s’applique à tous les jeunes conducteurs pendant : 3 ans après l’obtention du permis, la perte de 12 points ou l'annulation de son permis 2 ans si le permis a été obtenu dans le cadre de la conduite accompagnée. 0.2 g/l, c'est zéro verre d'alcool car dès le 1er verre, ce seuil peut être dépassé. Quelles sont les sanctions ? Les jeunes conducteurs contrôlés avec un taux d’alcoolémie supérieur ou égal à 0,2 g/l encourent : un retrait de 6 points sur leur permis.une amende forfaitaire de 135 €. une immobilisation du véhicule."
      },
      {
        "name": "Charlie Cheetah",
        "profilePic": "assets/img/speakers/2.jpg",
        "about": "Charlie is a Cheetah."
      },
      {
        "name": "Donald Duck",
        "profilePic": "assets/img/speakers/3.jpg",
        "about": "Donald is a Duck."
      },
      {
        "name": "Eva Eagle",
        "profilePic": "assets/img/speakers/4.jpg",
        "about": "Eva is an Eagle."
      },
      {
        "name": "Ellie Elephant",
        "profilePic": "assets/img/speakers/5.jpg",
        "about": "Ellie is an Elephant."
      },
      {
        "name": "Molly Mouse",
        "profilePic": "assets/img/speakers/6.jpg",
        "about": "Molly is a Mouse."
      },
      {
        "name": "Paul Puppy",
        "profilePic": "assets/img/speakers/7.jpg",
        "about": "Paul is a Puppy."
      }
    ];

    for (let item of items) {
      this.items.push(new Item(item));
    }
  }

  query(params?: any) {
    if (!params) {
      return this.items;
    }

    return this.items.filter((item) => {
      for (let key in params) {
        let field = item[key];
        if (typeof field == 'string' && field.toLowerCase().indexOf(params[key].toLowerCase()) >= 0) {
          return item;
        } else if (field == params[key]) {
          return item;
        }
      }
      return null;
    });
  }

  add(item: Item) {
    this.items.push(item);
  }

  delete(item: Item) {
    this.items.splice(this.items.indexOf(item), 1);
  }
}
