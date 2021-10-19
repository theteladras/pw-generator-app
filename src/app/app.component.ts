import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  providedLength = 0;
  useLetters = false;
  useNumbers = false;
  useSymbols = true;
  password = '';

  onButtonClick() {
    this.password = '';
  }

  getPassword(): string {
    return this.password;
  }

  onChangeUseLetters(): void {
    this.useLetters = !this.useLetters;
  }

  onChangeUseNumbers(): void {
    this.useLetters = !this.useLetters;
  }

  onChangeUseSymbols(): void {
    this.useLetters = !this.useLetters;
  }

  onChangeLength(value: string): void {
    const providedLength = parseInt(value);

    if (isNaN(providedLength)) return;

    this.providedLength = providedLength;
  }
}
