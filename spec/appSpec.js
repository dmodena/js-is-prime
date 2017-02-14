var isPrime = require('../app');

describe("Prime Number", function() {
    it("Should be divisible by 1 and itself", function() {
        expect(isPrime(2)).toBe(true);
        expect(isPrime(3)).toBe(true);
        expect(isPrime(5)).toBe(true);
        expect(isPrime(7)).toBe(true);
        expect(isPrime(11)).toBe(true);
        expect(isPrime(13)).toBe(true);
    });
    it("Should not be divisible by numbers other than 1 and itself", function() {
        expect(isPrime(1)).toBe(false);
        expect(isPrime(4)).toBe(false);
        expect(isPrime(9)).toBe(false);
        expect(isPrime(25)).toBe(false);
        expect(isPrime(49)).toBe(false);
        expect(isPrime(121)).toBe(false);
        expect(isPrime(169)).toBe(false);
    });
});
