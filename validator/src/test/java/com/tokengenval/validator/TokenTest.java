package com.tokengenval.validator;

import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
public class TokenTest {
    @Test
    void validate() {
        assert new Token("1234-5678-9012-3456") != null;
    }

    @Test
    void getCheckDigitTest() {
        assert new Token("1234-5678-9012-3456").getCheckDigit() == 6;
        assert new Token("1234-5678-9012-3457").getCheckDigit() == 7;
        assert new Token("1234-5678-9012-3458").getCheckDigit() == 8;
        assert new Token("1234-5678-9012-3459").getCheckDigit() == 9;
        assert new Token("1234-5678-9012-3450").getCheckDigit() == 0;
        assert new Token("1234-5678-9012-3451").getCheckDigit() == 1;
    }

    @Test
    void getPayloadTest() {
        assert new Token("1234-5678-9012-3456").getPayload().equals("123456789012345");
        assert new Token("1234-5678-9012-3457").getPayload().equals("123456789012345");
        assert new Token("1234-5678-9012-9999").getPayload().equals("123456789012999");
    }

    @Test
    void validateWithInvalidLength() {
        try {
            new Token("1234-5678-9012-345");
            assert false;
        } catch (IllegalArgumentException e) {
            assert true;
        }
    }

    @Test
    void validateWithInvalidCharacter() {
        try {
            new Token("1234-5678-9012-345a");
            assert false;
        } catch (IllegalArgumentException e) {
            assert true;
        }
    }

    @Test
    void validateWithInvalidSeparator() {
        try {
            new Token("1234-5678-9012-3456-");
            assert false;
        } catch (IllegalArgumentException e) {
            assert true;
        }
    }
}
