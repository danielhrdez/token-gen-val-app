package com.tokengenval.validator;

import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
public class LuhnTest {
    @Test
    void constructorTest() {
        assert new Luhn("1234-5678-9012-3456") != null;
    }

    @Test
    void validateTest() {
        assert new Luhn("5363-1575-9672-7592").validate();
    }

    @Test
    void invalidTokenLengthTest() {
        try {
            new Luhn("5363-1575-9672-759");
            assert false;
        } catch (IllegalArgumentException e) {
            assert true;
        }
    }

    @Test
    void invalidTokenCharacterTest() {
        try {
            new Luhn("1234-5678-9012-345a");
            assert false;
        } catch (IllegalArgumentException e) {
            assert true;
        }
    }
}
