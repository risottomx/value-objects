import { InvalidArgumentError } from '../src/exceptions/invalid-argument-error.exception';
import { StringValueObject } from '../src/string';

class TestString extends StringValueObject {}

describe('String', () => {
  it('should create instance', () => {
    const instance = new TestString('Hello World!');
    expect(instance).toBeDefined();
  });

  it('should throw exception if not string', () => {
    expect(() => new TestString(null)).toThrowError(InvalidArgumentError);
    expect(() => new TestString(undefined)).toThrowError(InvalidArgumentError);
  });

  it('should check equality', () => {
    const instance1 = new TestString('Hello World!');
    const instance2 = new TestString('Hello World!');
    const instance3 = new TestString('John Doe');
    const instance4 = new TestString('Jane Doe');

    expect(instance1.equals(instance2)).toBeTruthy();
    expect(instance3.equals(instance4)).toBeFalsy();
  });
});
