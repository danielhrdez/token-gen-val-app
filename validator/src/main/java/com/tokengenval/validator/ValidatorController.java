package com.tokengenval.validator;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

/**
 * Controller for the application.
 */
@RestController
public class ValidatorController {
    /**
     * Validates a token.
     * @param token The token to validate, must be a string with quotes.
     * @return Whether the token is valid.
     */
    @PostMapping("/validate")
    public boolean validate(@RequestBody String token) {
        String tokenWithoutQuotes = token.substring(1, token.length()-1);
        return new Luhn(tokenWithoutQuotes).validate();
    }
}
