package com.tokengenval.validator;

import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
public class ValidatorControllerTest {
    private ValidatorController controller = new ValidatorController();

    @Test
    void validate() {
        assert controller.validate("\"5363-1575-9672-7592\"");
    }

    @Test
    void validateWithInvalidLength() {
        try {
            controller.validate("\"5363-1575-9672-759\"");
            assert false;
        } catch (IllegalArgumentException e) {
            assert true;
        }
    }

    @Test
    void validateWithInvalidCharacter() {
        try {
            controller.validate("\"1234-5678-9012-345a\"");
            assert false;
        } catch (IllegalArgumentException e) {
            assert true;
        }
    }

    @Test
    void validateWithInvalidSeparator() {
        try {
            controller.validate("\"1234-5678-9012-3456-\"");
            assert false;
        } catch (IllegalArgumentException e) {
            assert true;
        }
    }

    @Test
    void validateWithInvalidSeparatorPosition() {
        try {
            controller.validate("\"1234-5678-9012-345-6789\"");
            assert false;
        } catch (IllegalArgumentException e) {
            assert true;
        }
    }

    @Test
    void validateWithInvalidSeparatorCount() {
        try {
            controller.validate("\"1234-5678-9012-3456-789\"");
            assert false;
        } catch (IllegalArgumentException e) {
            assert true;
        }
    }
}
