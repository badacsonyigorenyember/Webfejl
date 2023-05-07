import { Injectable } from '@angular/core';
import {AngularFirestore} from "@angular/fire/compat/firestore";
import {Property} from "../models/Property";

@Injectable({
  providedIn: 'root'
})
export class PropertyService {

  collectionName: string = "Properties";

  constructor(private afs: AngularFirestore) { }

  create(prop: Property){
    prop.id = this.afs.createId();
    return this.afs.collection<Property>(this.collectionName).doc(prop.id).set(prop);
  }

  getAll(){
    return this.afs.collection<Property>(this.collectionName).valueChanges();
  }

  getPropertiesByUser(userId: string){
    return this.afs.collection<Property>(this.collectionName,
        ref => ref.where('userId', '==', userId).
        orderBy('dateOfBuild', 'asc')).valueChanges();
  }

  update(prop: Property){
    return this.afs.collection<Property>(this.collectionName).doc(prop.id).set(prop);
  }

  delete(id: string){
    return this.afs.collection<Property>(this.collectionName).doc(id).delete();
  }
}
