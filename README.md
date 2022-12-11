## Table of Contents

- [Installing](#installing)
- Value Objects
  - [StringValueObject](#stringvalueobject)
  - [NumberValueObject](#numbervalueobject)
  - [UUID](#uuid)
  - [Enum](#enum)
  - [Custom Value Objects](#custom-value-objects)
- [Primitives](#primitives)
- [Exception](#exception)

## Installing

```bash
npm install @risotto/value-objects
```

Once the package is installed, you can import the library using `import` or `require` approach:

```js
import { StringValueObject } from '@risotto/value-objects';
```

## StringValueObject

Initialize String value object

```js
import { StringValueObject } from '@risotto/value-objects';

export class ProductName extends StringValueObject {}

const name = new ProductName('foo');
console.log(name.value); // foo
```

`equals()`

```js
const name1 = new ProductName('foo');
const name2 = new ProductName('bar');
const name3 = new ProductName('foo');

console.log(name1.equals(name2)); // false
console.log(name1.equals(name3)); // true
```

## NumberValueObject

Initialize Number value object

```js
import { NumberValueObject } from '@risotto/value-objects';

export class ProductStockQuantity extends NumberValueObject {}

const quantity = new ProductStockQuantity(24);
console.log(quantity.value); // 24
```

`isBiggerThan()`

```js
const number1 = new ProductStockQuantity(4);
const number2 = new ProductStockQuantity(2);

console.log(number1.isBiggerThan(number2)); // true
console.log(number2.isBiggerThan(number1)); // false
```

`isLessThan()`

```js
const number1 = new ProductStockQuantity(2);
const number2 = new ProductStockQuantity(4);

console.log(number1.isLessThan(number2)); // true
console.log(number2.isLessThan(number1)); // false
```

## UUID

Initialize Uuid value object

```js
import { Uuid } from '@risotto/value-objects';

const uuid = new Uuid('d2362e93-8f8e-45ed-8154-28a43f70d551');
console.log(uuid.value); // d2362e93-8f8e-45ed-8154-28a43f70d551
```

`random()`

```js
import { Uuid } from '@risotto/value-objects';

const random = Uuid.random();
console.log(random.value); // random uuid
```

## Enum

Initialize Enum value object

```js
import { EnumValueObject } from '@risotto/value-objects';
import { InvalidArgumentError } from '@risotto/value-objects/exceptions';

enum Status {
  IN_STOCK = 'IN_STOCK',
  OUT_OF_STOCK = 'OUT_OF_STOCK'
}

export class ProductStatus extends EnumValueObject<Status> {
  constructor(value: Status) {
    super(value, Object.values(Status))
  }

  // custom implementation from abstract class
  protected throwErrorForInvalidValue(value: Status): void {
    throw new InvalidArgumentError(`The status ${value} is invalid`);
  }
}
```

usage:

```js
const status = new ProductStatus(Status.IN_STOCK);
console.log(status.value); // IN_STOCK
```

## Custom Value Objects

You can create your custom implementations by extending from any of the next classes: `StringValueObject`, `NumberValueObject`, `EnumValueObject`, `Uuid`, and `ValueObject`

## Primitives

With `Primitives` **type** you can get the primitive values of any `class` that extends from `ValueObject` abstract class

i.e:

```js
import { Primitives } from "@risotto/value-objects/primitives";

export class Product {
  constructor(private id: ProductId, private name: ProductName) {}

  toPrimitives(): Primitives<Product> {
    return {
      id: this.id.value,
      name: this.name.value
    }
  }
}
```

## Exception

All exceptions thrown by Value Objects are instance of `InvalidArgumentError` and imports as follow:

```js
import { InvalidArgumentError } from '@risotto/value-objects/exceptions';
```
