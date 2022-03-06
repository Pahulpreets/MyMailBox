import { Injectable, EventEmitter } from "@angular/core";

@Injectable({
  providedIn: "root",
})

export class ManageService {
    updateDataEmitter = new EventEmitter<any>();
    constructor() {}
}