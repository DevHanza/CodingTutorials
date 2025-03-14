import { Component, Inject, InjectionToken } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FileLoggerService } from '../services/file.logger.service';
import { ConsoleLoggerService } from '../services/console.logger.service';
import { Logger } from '../services/logger';

const Logger_Token = new InjectionToken<Logger>('logger');

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  // providers: [LoggerService],
  providers: [
    {
      provide: Logger_Token,
      useClass: ConsoleLoggerService,
    },
  ],
})
export class AppComponent {

  constructor(@Inject(Logger_Token) private logger: Logger) {
    this.logger.log('hi leela');
  }

  
}

