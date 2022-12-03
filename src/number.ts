import { ValueObject } from './value-object';

export abstract class NumberValueObject extends ValueObject<number> {
  isBiggerThan(other: NumberValueObject): boolean {
    return this.value > other.value;
  }

  isLessThan(other: NumberValueObject): boolean {
    return this.value < other.value;
  }
}
