package com.tokengenval.validator;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

/**
 * Main class for the application.
 */
@SpringBootApplication
public class ValidatorApplication {
	/**
	 * Main method for the application.
	 * @param args The command line arguments.
	 */
	public static void main(String[] args) {
		SpringApplication.run(ValidatorApplication.class, args);
	}

	/**
	 * Configures CORS for the application.
	 * @return The configured CORS.
	 */
	@Bean
	public WebMvcConfigurer corsConfigurer() {
		return new WebMvcConfigurer() {
			@Override
			public void addCorsMappings(CorsRegistry registry) {
				registry.addMapping("/validate").allowedOrigins("http://localhost:8080");
			}
		};
	}
}
