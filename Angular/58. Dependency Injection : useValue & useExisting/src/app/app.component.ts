import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MainService } from './services/main.service';
import { ExperimentService } from './services/experiment.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers: [{
    provide: MainService,
    // useClass: ExperimentService,
    // useExisting: ExperimentService,
    useValue: { dsds: 'dsds' },

  }]
})
export class AppComponent {

  ms = inject(MainService);
  es = inject(ExperimentService);

  constructor() {
    console.log(this.es === this.ms);

    console.log(this.ms);
    console.log(this.es);
  }
}
