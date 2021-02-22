import { isValidHex } from './utils';

describe("Test utils.js", () => {
    test("Should validate hex", () => {
        expect(isValidHex("#")).toBe(false);
        expect(isValidHex("")).toBe(false);
        expect(isValidHex("#zzz")).toBe(false);
        expect(isValidHex("#10101010101")).toBe(false);
        expect(isValidHex("#111")).toBe(true);
        expect(isValidHex("#fff111")).toBe(true);
    });
});