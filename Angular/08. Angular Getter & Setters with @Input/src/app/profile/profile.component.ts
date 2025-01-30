import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-profile',
  imports: [],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {
  private _name: string = '';

  @Input()
  set name(value: string) {
    this._name = value ? value.trim() : 'Guest';
  }

  get name(): string {
    return this._name.toUpperCase();
  }
}
