package com.tokengenval.generator;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class GeneratorController {
    @PostMapping("/generate")
    public String generate(@RequestBody int[] allowedDigits) {
        return new RandomGenerator(allowedDigits).random();
    }
}
