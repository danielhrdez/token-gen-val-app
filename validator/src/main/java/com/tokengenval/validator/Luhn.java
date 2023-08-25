package com.tokengenval.validator;

public class Luhn {
    private int checkDigit;
    private String payload;

    public Luhn(String tokenString) {
        Token token = new Token(tokenString);
        this.checkDigit = token.getCheckDigit();
        this.payload = token.getPayload();
    }

    public boolean validate() {
        int sum = 0;
        for (int i = payload.length() - 1; i >= 0; i--) {
            int digit = Character.getNumericValue(payload.charAt(i));
            if (i % 2 == 0) {
                digit *= 2;
                if (digit > 9) {
                    digit -= 9;
                }
            }
            sum += digit;
        }
        int resultDigit = 10 - (sum % 10);
        return resultDigit == checkDigit;
    }
}
