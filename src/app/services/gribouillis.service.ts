import { Injectable } from "@angular/core";
import { Gribouillis } from "../models/gribouillis.model";

@Injectable({
    providedIn:'root'
})
export class GribouillisService{
    gribouillis : Gribouillis[]= [
        {
          id: 1,
          title: 'Le chien',
          description: 'Dessin de chien', 
          createdDate : new Date(), 
          likes: 100, 
          drawingUrl: "../assets/chien.png",
          isLiked: false,
          location : "Nantes"
          },
  
        {
          id: 2,
          title: 'Sad man',
          description: 'Sous la pluie, ennui', 
          createdDate : new Date(), 
          likes: 0, 
          drawingUrl: "../assets/sadMan.jpg",
          isLiked: false,
          location: "Paris"
        },
  
        { id: 3,
          title: 'La belle mouche',
          description: 'I\'m Slaying in the rain', 
          createdDate : new Date(), 
          likes: 0, 
          drawingUrl: "../assets/coolFly.jpg",
          isLiked: false
        }
      ];

      getAllGribouillis(): Gribouillis[] {
        return this.gribouillis;
      }

    getGribouillisById(gribouillisId: number) : Gribouillis {
      const gribouillisCible = this.gribouillis.find(gribouillis => gribouillis.id === gribouillisId);
      if(!gribouillisCible) {
        throw new Error ('Gribouillis not found');
      } else {
      return gribouillisCible;
      }
    }

    handleLikeById(gribouillisId:number): void {

    
    //gestion de cas d'erreur : si on appelle un ID qui n'existe pas
    const gribouillisToLike = this.getGribouillisById(gribouillisId);

      if(gribouillisToLike.isLiked === false){
        gribouillisToLike.likes++;
        gribouillisToLike.isLiked = true;
      } else {
        gribouillisToLike.likes--;
        gribouillisToLike.isLiked = false;
      }

  }
}