const { TestScheduler } = require("jest");
const addition = require("../calc");

describe("calculator", () => {
    describe("Addition function", () => {
        test("should return 42 for 20 + 22", () => {
            expect(addition(20, 22)).toBe(42);
        });
        test("should return 73 for 42 + 31", () => {
            expect(addition(42, 31)).toBe(73);
        });
         test("should return 20 + String for 20 + abc", () => {
            expect(addition(20, "abc")).toBe("20abc");
        });
        test("should return '' for '' + ''", () => {
            expect(addition('', '')).toBe('');
        });
    });
    describe("Subtraction function", () => {

    });
    describe("Multiply function", () => {

    });
    describe("Division function", () => {

    });
})