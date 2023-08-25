package com.tokengenval.generator;

import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
public class GeneratorControllerTests {
    private GeneratorController controller = new GeneratorController();
    
    @Test
    void generate() {
        String result = controller.generate(new int[] { 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 });
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
    void generateWithOneDigit() {
        String result = controller.generate(new int[] { 0 });
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
    void generateWithNoDigits() {
        try {
            controller.generate(new int[] {});
            assert false;
        } catch (IllegalArgumentException e) {
            assert true;
        }
    }

    @Test
    void generateWithNegativeDigit() {
        try {
            controller.generate(new int[] { -1 });
            assert false;
        } catch (IllegalArgumentException e) {
            assert true;
        }
    }
}
