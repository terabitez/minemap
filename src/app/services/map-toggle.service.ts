import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MapToggleService {
  toggleMap = new Subject<boolean>();
  constructor() { }
}
