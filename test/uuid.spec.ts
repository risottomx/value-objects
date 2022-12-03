import { InvalidArgumentError } from '../src/exceptions/invalid-argument-error.exception';
import { Uuid } from '../src/uuid';
import { v4 as uuid, validate } from 'uuid';

describe('Uuid', () => {
  it('should create instance', () => {
    const expected = uuid();
    const instance = new Uuid(expected);
    expect(instance).toBeDefined();
    expect(instance).toBeTruthy();
    expect(instance.value).toBe(expected);
  });

  it('should throw error if empty', () => {
    expect(() => new Uuid(undefined)).toThrow(InvalidArgumentError);
    expect(() => new Uuid(null)).toThrow(InvalidArgumentError);
  });

  it('should throw error if invalid uuid', () => {
    const invalidNumber = '123' as any;
    expect(() => new Uuid(invalidNumber)).toThrow(InvalidArgumentError);
  });

  it('should return random uuid', () => {
    const uuid = Uuid.random();
    expect(validate(uuid.value)).toBeTruthy();
  });

  it('should check equality', () => {
    const expected = uuid();
    const instance1 = new Uuid(expected);
    const instance2 = new Uuid(expected);
    const instance3 = Uuid.random();
    const instance4 = Uuid.random();

    expect(instance1.equals(instance2)).toBeTruthy();
    expect(instance3.equals(instance4)).toBeFalsy();
  });

  it('should convert to string', () => {
    const expected = uuid();
    const instance = new Uuid(expected);
    expect(instance.toString()).toBe(expected);
  });
});
