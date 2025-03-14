import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FileLoggerService {

  log(message: string){
    console.log('FileLoggerService\n' + message);
 }

  constructor() { }
}
