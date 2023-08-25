package com.tokengenval.generator;

/**
 * Generates a random token.
 */
public class RandomGenerator {
    private int[] allowedDigits;

    /**
     * Constructor.
     * @param numbers The digits allowed in the token.
     */
    public RandomGenerator(int[] numbers) {
        if (numbers.length < 1) {
            throw new IllegalArgumentException("Allowed digits must be at least one");
        }
        for (int i = 0; i < numbers.length; i++) {
            if (numbers[i] < 0 || numbers[i] > 9) {
                throw new IllegalArgumentException("Allowed digits must be between 0 and 9");
            }
        }
        this.allowedDigits = numbers;
    }

    /**
     * Generates a random token.
     * @return The generated token.
     */
    public String random() {
        StringBuffer sb = new StringBuffer("XXXX-XXXX-XXXX-XXXX");
        for (int i = 0; i < sb.length(); i++) {
            if (sb.charAt(i) == '-') {
                continue;
            }
            int random = (int) (Math.random() * allowedDigits.length);
            sb.setCharAt(i, Character.forDigit(allowedDigits[random], 10));
        }
        return sb.toString();
    }
}
