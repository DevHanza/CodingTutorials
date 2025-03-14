import { Injectable } from '@angular/core';
import { Logger } from './logger';

@Injectable({
  providedIn: 'root'
})
export class ConsoleLoggerService implements Logger {

  log(message: string){
    console.log('ConsoleLoggerService\n' + message);
 }

  constructor() { }
}
