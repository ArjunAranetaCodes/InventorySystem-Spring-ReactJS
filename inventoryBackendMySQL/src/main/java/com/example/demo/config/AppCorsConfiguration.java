package com.example.demo.config;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Bean;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.filter.CorsFilter;
import org.springframework.web.cors.*;
import java.util.LinkedHashMap;
import java.util.Map;

@Configuration
public class AppCorsConfiguration {

    @Bean
    public CorsFilter curionCorsConfiguration() {
        CorsConfiguration corsConfiguration = new CorsConfiguration();
        corsConfiguration.addAllowedOriginPattern("*");
        corsConfiguration.addAllowedHeader("*");
        corsConfiguration.addAllowedMethod("*");
        corsConfiguration.addExposedHeader("ExposedHeaderName");

        Map<String, CorsConfiguration> corsConfigurations = new LinkedHashMap<>(1);
        corsConfigurations.put("/api/**", corsConfiguration);

        UrlBasedCorsConfigurationSource configurationSource = new UrlBasedCorsConfigurationSource();
        configurationSource.setCorsConfigurations(corsConfigurations);
        configurationSource.setAllowInitLookupPath(true);

        return new CorsFilter(configurationSource);
    }
}
