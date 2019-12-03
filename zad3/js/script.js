"use strict";
class Sum {
  constructor(cacheSize) {
    this.cache;
    this.cacheSize = cacheSize;
  }

  summa(a, b) {
    this.cache == undefined ? (this.cache = []) : null;
    for (let item of this.cache) {
      if (a == item.a && b == item.b) {
        if (this.cache.length < this.cacheSize) {
          this.cache.push({ a: a, b: b, sum: item.sum });
        } else {
          this.cache.shift();
          this.cache.push({ a: a, b: b, sum: item.sum });
        }
        console.log({ a: a, b: b, sum: item.sum });
        return item.sum;
      }
    }
    let sum = a + b;
    if (this.cache.length < this.cacheSize) {
      this.cache.push({ a: a, b: b, sum: sum });
    } else {
      this.cache.shift();
      this.cache.push({ a: a, b: b, sum: sum });
    }
    console.log({ a: a, b: b, sum: sum });
    return sum;
  }
}

let x = new Sum(3);
x.summa(5, 10);
x.summa(9, 1);
x.summa(100, 6);
x.summa(3, 2);
x.summa(100, 6);
x.summa(9, 1);
