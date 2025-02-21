import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-search',
  imports: [FormsModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {
  @Input() textInput = "1";

  updateSearchBox(event: any) {
    this.textInput = event.target.value;
  }
}
