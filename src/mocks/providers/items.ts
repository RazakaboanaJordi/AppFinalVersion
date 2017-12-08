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
        "name": "Ceinture",
        "profilePic": "assets/img/speakers/2.jpg",
        "about": "Un geste vital pour se protéger. Le port de la ceinture de sécurité est obligatoire, pourtant, le réflexe de boucler sa ceinture que l’on croyait définitivement acquis en 40 ans, ne l’est pas pour l’ensemble des Français. En 2016, 20% des personnes tuées dans un véhicule (tourisme, utilitaires, poids lourds) ne portaient pas de ceinture. Boucler sa ceinture de sécurité, c’est un geste qui sauve des vies."
      },
      {
        "name": "Conduite sans permis",
        "profilePic": "assets/img/speakers/3.jpg",
        "about": "La peine encourue pour le défaut de permis est d’un an d’emprisonnement et 15000 euros d’amende. Le véhicule peut être immobilisé et mis en fourrière immédiatement, il peut être confisqué si le conducteur en est propriétaire.Dans le cas d’un conducteur ayant déjà commis un délit relatif au code de la route (par exemple, conduite sans permis, mais aussi conduite sous l’emprise de l’alcool ou après usage de stupéfiants), les sanctions prononcées sont alors plus lourdes. Elles peuvent aller jusqu’à 2 ans d’emprisonnement et 30 000 euros d’amende pour le défaut de permis."
      },
      {
        "name": "Sans assurance ?",
        "profilePic": "assets/img/speakers/4.jpg",
        "about": "La conduite sans assurance constitue un délit. La peine encourue pour le défaut d’assurance est une amende de 3 750 euros, pouvant être assortie de peines complémentaires comme la suspension ou l’annulation du permis, avec interdiction de le repasser, et la confiscation du véhicule. En cas de réitération du comportement, la réponse pénale sera plus sévère, et pourrait aller jusqu’à 7 500 euros d’amende assortie de peines complémentaires telles que l’annulation du permis de conduire avec interdiction de le repasser, et la confiscation du véhicule."
      },
      {
        "name": "Téléphone au volant",
        "profilePic": "assets/img/speakers/5.jpg",
        "about": "En utilisant son téléphone pendant la conduite, un automobiliste détourne son attention et peut ainsi faucher du bout de ses doigts la vie d’un cycliste, d’un piéton, d’un autre usager de la route. À partir du 20 octobre 2017, la Sécurité routière lance une campagne (affichage et radio) pour faire prendre conscience que quelques secondes d’utilisation de son téléphone au volant peuvent suffire à faire basculer une vie.Lire ou écrire un texto, un post sur les réseaux sociaux, ou seulement parcourir ses courriels, sont devenus des gestes anodins dans le quotidien de chacun. Ils peuvent cependant s’avérer dramatiques lorsqu’ils sont pratiqués en conduisant. Ces gestes obligent en effet à quitter la route des yeux au moins 5 secondes, soit une distance parcourue de 70 mètres en ville (à 50 km/h) et multiplient par 23 les risques d’accidents.Ces dernières années, le téléphone est devenu l’une des principales causes d’accidents sur la route avec la vitesse et l’alcool. Près d’un accident corporel sur 10 serait lié à l’utilisation du téléphone en conduisant. "
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
