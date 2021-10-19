import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  initialProvidedLength = 0;
  providedLength = 0;
  useLetters = false;
  limitLetters: number | null = null;
  useNumbers = false;
  limitNumbers: number | null = null;
  useSymbols = false;
  limitSymbols: number | null = null;
  password = '';
  availableCharacterSets = {
    numbers: '1234567890',
    letters: 'abcdefghijklmnopqrstuvwxyz',
    symbols: '!@#$%^&*&(',
  };

  getPassword(): string {
    return this.password;
  }

  onChangeUseLetters(): void {
    this.useLetters = !this.useLetters;
    if (!this.useLetters) this.limitLetters = null;
  }

  onChangeUseNumbers(): void {
    this.useNumbers = !this.useNumbers;
    if (!this.useNumbers) this.limitNumbers = null;
  }

  onChangeUseSymbols(): void {
    this.useSymbols = !this.useSymbols;
    if (!this.useSymbols) this.limitSymbols = null;
  }

  onChangeLength(value: string): void {
    const providedLength = parseInt(value);

    if (isNaN(providedLength)) return;

    this.providedLength = providedLength;
    this.initialProvidedLength = providedLength;
  }

  private getValidPasswordCharacters = (): string => {
    let validCharacters = '';

    if (this.useLetters)
      validCharacters = validCharacters.concat(
        this.availableCharacterSets.letters.substring(
          0,
          this.limitLetters || this.availableCharacterSets.letters.length
        )
      );
    if (this.useNumbers)
      validCharacters = validCharacters.concat(
        this.availableCharacterSets.numbers.substring(
          0,
          this.limitNumbers || this.availableCharacterSets.numbers.length
        )
      );
    if (this.useSymbols)
      validCharacters = validCharacters.concat(
        this.availableCharacterSets.symbols.substring(
          0,
          this.limitSymbols || this.availableCharacterSets.symbols.length
        )
      );

    const password = Array(this.providedLength)
      .fill(null)
      .map(() => {
        const randomlyPickedItem =
          validCharacters[Math.floor(Math.random() * validCharacters.length)];
        return randomlyPickedItem;
      })
      .join('');

    return password;
  };

  onButtonClick() {
    this.password = this.getValidPasswordCharacters();
  }

  onLimitLettersChange(value: string) {
    const numValue = parseInt(value);

    if (!numValue) return (this.limitLetters = null);

    this.limitLetters = numValue;
    return;
  }

  onLimitNumbersChange(value: string) {
    const numValue = parseInt(value);

    if (!numValue) return (this.limitNumbers = null);

    this.limitNumbers = numValue;
    return;
  }

  onLimitSymbolsChange(value: string) {
    const numValue = parseInt(value);

    if (!numValue) return (this.limitSymbols = null);

    this.limitSymbols = numValue;
    return;
  }

  getLength(): number {
    const limitLengthValid =
      !!this.limitLetters && this.limitNumbers && this.limitSymbols;

    if (limitLengthValid) {
      this.providedLength =
        this.limitLetters! + this.limitNumbers! + this.limitSymbols!;
    }
    return this.providedLength;
  }

  getNumberOfLetters(): number {
    return this.availableCharacterSets.letters.length;
  }

  getNumberOfNumbers(): number {
    return this.availableCharacterSets.numbers.length;
  }

  getNumberOfSymbols(): number {
    return this.availableCharacterSets.symbols.length;
  }
}
