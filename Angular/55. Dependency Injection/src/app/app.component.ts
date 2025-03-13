import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoggerService } from './logger.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',

  providers: [LoggerService]
})
export class AppComponent {

  // 1st Method
  constructor(private logger: LoggerService) {
  }

  // 2nd Method
  private logger2 = inject(LoggerService);
  
}
