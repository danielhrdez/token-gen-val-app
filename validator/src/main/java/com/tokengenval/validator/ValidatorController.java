package com.tokengenval.validator;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ValidatorController {
    @PostMapping("/validate")
    public boolean validate(@RequestBody String token) {
        String tokenWithoutQuotes = token.substring(1, token.length()-1);
        return new Luhn(tokenWithoutQuotes).validate();
    }
}
