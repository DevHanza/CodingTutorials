import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ConsoleLoggerService {

  log(message: string){
    console.log('ConsoleLoggerService\n' + message);
 }

  constructor() { }
}
