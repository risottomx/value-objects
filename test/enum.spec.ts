import { EnumValueObject } from '../src/enum';
import { InvalidArgumentError } from '../src/exceptions/invalid-argument-error.exception';

enum Status {
  Disabled = '0',
  Free = '1',
  Busy = '2',
  ToBeReleased = '3',
  Reserved = '4',
}

class TestEnum extends EnumValueObject<Status> {
  constructor(value: Status) {
    super(value, Object.values(Status));
  }

  protected throwErrorForInvalidValue(value: Status): void {
    throw new InvalidArgumentError(`The status ${value} is invalid`);
  }
}

describe('Enum', () => {
  it('should create instance', () => {
    const instance = new TestEnum(Status.Free);
    expect(instance.value).toBe(Status.Free);
  });

  it('should throw error if value not in enum', () => {
    expect(() => {
      new TestEnum('invalid value' as unknown as Status);
    }).toThrowError(InvalidArgumentError);
  });
});
