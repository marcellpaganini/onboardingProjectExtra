import { helperFunctions } from './formTools';


test('Converts decimal to percentage', () => {
    expect(helperFunctions.decimalToPercentage(0.5)).toBe("50%");
});

test('Converts number to currency', () => {
    expect(helperFunctions.priceToCurrency(45)).toBe("$45.00");
});

test('Returns the order status', () => {
    expect(helperFunctions.getStatus(1)).toBe("⏳ Pending payment");
});
