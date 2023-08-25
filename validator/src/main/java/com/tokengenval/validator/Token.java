package com.tokengenval.validator;

/**
 * Represents a token.
 */
public class Token {
    private String token;

    /**
     * Constructor.
     * @param token The token.
     */
    public Token(String token) {
        checkToken(token);
        this.token = token;
    }

    /**
     * Checks if the token is valid.
     * @param token The token.
     */
    private void checkToken(String token) {
        if (token.length() != 19) {
            throw new IllegalArgumentException("Token must be 19 characters long");
        }
        for (int i = 0; i < token.length(); i++) {
            if (i % 5 == 4) {
                if (token.charAt(i) != '-') {
                    throw new IllegalArgumentException("Token must have '-' at positions 5, 10, 15");
                }
            } else {
                if (token.charAt(i) < '0' || token.charAt(i) > '9') {
                    throw new IllegalArgumentException("Token must have only digits and '-'");
                }
            }
        }
    }

    /**
     * Gets the check digit, is the last digit of the token.
     * @return The check digit.
     */
    public int getCheckDigit() {
        return Character.getNumericValue(token.charAt(token.length() - 1));
    }

    /**
     * Gets the payload, is the token without the check digit and the dashes.
     * @return The payload.
     */
    public String getPayload() {
        StringBuffer sb = new StringBuffer(token);
        for (int i = 0; i < sb.length(); i++) {
            if (sb.charAt(i) == '-') {
                sb.deleteCharAt(i);
            }
        }
        sb.deleteCharAt(sb.length() - 1);
        return sb.toString();
    }
}