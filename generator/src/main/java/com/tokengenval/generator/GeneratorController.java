package com.tokengenval.generator;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

/**
 * Controller for the application.
 */
@RestController
public class GeneratorController {
    /**
     * Generates a random token.
     * @param allowedDigits The digits allowed in the token.
     * @return The generated token.
     */
    @PostMapping("/generate")
    public String generate(@RequestBody int[] allowedDigits) {
        return new RandomGenerator(allowedDigits).random();
    }
}
