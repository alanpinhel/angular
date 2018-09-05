import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

import { PhotoService } from '../photo/photo.service';
import { Photo } from './../photo/photo';

@Injectable({
  providedIn: 'root'
})
export class PhotoListResolver implements Resolve<Observable<Photo[]>> {
  constructor(private service: PhotoService) {}

  resolve(route: ActivatedRouteSnapshot): Observable<Photo[]> {
    const userName = route.params.userName;
    return this.service.listUserPhotosPaginated(userName, 1);
  }
}
