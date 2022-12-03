import { InvalidArgumentError } from '../src/exceptions/invalid-argument-error.exception';
import { NumberValueObject } from '../src/number';

class TestNumber extends NumberValueObject {}

describe('Number', () => {
  it('should create instance', () => {
    const instance = new TestNumber(1);
    expect(instance).toBeDefined();
  });

  it('should throw exception if not number', () => {
    expect(() => new TestNumber(null)).toThrowError(InvalidArgumentError);
    expect(() => new TestNumber(undefined)).toThrowError(InvalidArgumentError);
  });

  it('should check if number is bigger than', () => {
    const instance1 = new TestNumber(4);
    const instance2 = new TestNumber(2);
    const instance3 = new TestNumber(2);
    const instance4 = new TestNumber(4);

    expect(instance1.isBiggerThan(instance2)).toBeTruthy();
    expect(instance3.isBiggerThan(instance4)).toBeFalsy();
  });

  it('should check if number is less than', () => {
    const instance1 = new TestNumber(2);
    const instance2 = new TestNumber(4);
    const instance3 = new TestNumber(4);
    const instance4 = new TestNumber(2);

    expect(instance1.isLessThan(instance2)).toBeTruthy();
    expect(instance3.isLessThan(instance4)).toBeFalsy();
  });

  it('should check equality', () => {
    const instance1 = new TestNumber(4);
    const instance2 = new TestNumber(4);
    const instance3 = new TestNumber(0);
    const instance4 = new TestNumber(1);

    expect(instance1.equals(instance2)).toBeTruthy();
    expect(instance3.equals(instance4)).toBeFalsy();
  });

  it('should convert to string', () => {
    const instance = new TestNumber(4);
    expect(instance.toString()).toBe('4');
  });
});
