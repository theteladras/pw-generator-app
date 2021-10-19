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
  useSymbols = false;
  password = '';

  getPassword(): string {
    return this.password;
  }

  onChangeUseLetters(): void {
    this.useLetters = !this.useLetters;
  }

  onChangeUseNumbers(): void {
    this.useNumbers = !this.useNumbers;
  }

  onChangeUseSymbols(): void {
    this.useSymbols = !this.useSymbols;
  }

  onChangeLength(value: string): void {
    const providedLength = parseInt(value);

    if (isNaN(providedLength)) return;

    this.providedLength = providedLength;
  }

  private getValidPasswordCharacters = (): string => {
    let validCharacters = '';

    const availableCharacterSets = {
      numbers: '1234567890',
      letters: 'abcdefghijklmnopqrstuvwxyz',
      symbols: '!@#$%^&*&(',
    };

    if (this.useLetters)
      validCharacters = validCharacters.concat(availableCharacterSets.letters);
    if (this.useNumbers)
      validCharacters = validCharacters.concat(availableCharacterSets.numbers);
    if (this.useSymbols)
      validCharacters = validCharacters.concat(availableCharacterSets.symbols);

    const password = Array(this.providedLength)
      .fill(null)
      .map(() => {
        const randomlyPickedItem =
          validCharacters[Math.floor(Math.random() * validCharacters.length)];
        return randomlyPickedItem;
      })
      .join('');

    console.log(password);

    return password;
  };

  onButtonClick() {
    this.password = this.getValidPasswordCharacters();
  }
}
