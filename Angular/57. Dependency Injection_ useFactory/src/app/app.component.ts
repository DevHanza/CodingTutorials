import { Component, Inject, InjectionToken } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FileLoggerService } from '../services/file.logger.service';
import { ConsoleLoggerService } from '../services/console.logger.service';
import { TestService } from '../services/test.service';
import { LoggerFactory } from '../services/logger.factory';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers: [
    LoggerFactory

    // ConsoleLoggerService,

    // {
    //   provide: ConsoleLoggerService,
    //   useFactory: (testService: TestService) =>
    //     testService.status
    //   ? new ConsoleLoggerService()
    //   : new FileLoggerService(),
    //   deps:[TestService],
    // },
  ],
})
export class AppComponent {
  constructor(private logger: ConsoleLoggerService) {
    this.logger.log('hi leela');
  }
}
