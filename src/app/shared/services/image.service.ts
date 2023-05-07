import { Injectable } from '@angular/core';
import {AngularFirestore} from "@angular/fire/compat/firestore";
import {AngularFireStorage} from "@angular/fire/compat/storage";

@Injectable({
  providedIn: 'root'
})
export class ImageService {
  constructor(private storage: AngularFireStorage) {}

  uploadImage(image: File): Promise<string> {
    const path = `images/${new Date().getTime()}_${image.name}`;
    const ref = this.storage.ref(path);
    return ref.put(image).then(() => ref.getDownloadURL());
  }
}
