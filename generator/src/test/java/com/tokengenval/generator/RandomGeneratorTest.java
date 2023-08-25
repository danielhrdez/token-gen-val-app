package com.tokengenval.generator;

import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
public class RandomGeneratorTest {
    @Test
    void random() {
        RandomGenerator generator = new RandomGenerator(new int[] { 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 });
        String result = generator.random();
        assert result.length() == 19;
        assert result.charAt(4) == '-';
        assert result.charAt(9) == '-';
        assert result.charAt(14) == '-';
        for (int i = 0; i < result.length(); i++) {
            if (i != 4 && i != 9 && i != 14) {
                assert result.charAt(i) >= '0' && result.charAt(i) <= '9';
            }
        }
    }

    @Test
    void randomWithOneDigit() {
        RandomGenerator generator = new RandomGenerator(new int[] { 0 });
        String result = generator.random();
        assert result.length() == 19;
        assert result.charAt(4) == '-';
        assert result.charAt(9) == '-';
        assert result.charAt(14) == '-';
        for (int i = 0; i < result.length(); i++) {
            if (i != 4 && i != 9 && i != 14) {
                assert result.charAt(i) == '0';
            }
        }
    }

    @Test
    void randomWithNoDigits() {
        try {
            new RandomGenerator(new int[] {});
            assert false;
        } catch (IllegalArgumentException e) {
            assert true;
        }
    }

    @Test
    void randomWithNegativeDigit() {
        try {
            new RandomGenerator(new int[] { -1 });
            assert false;
        } catch (IllegalArgumentException e) {
            assert true;
        }
    }
}
