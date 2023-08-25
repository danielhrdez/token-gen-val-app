package com.tokengenval.validator;

public class Token {
    private String token;

    public Token(String token) {
        checkToken(token);
        this.token = token;
    }

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

    public int getCheckDigit() {
        return Character.getNumericValue(token.charAt(token.length() - 1));
    }

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