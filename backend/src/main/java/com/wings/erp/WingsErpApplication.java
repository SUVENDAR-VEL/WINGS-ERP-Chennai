package com.wings.erp;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import org.springframework.data.jpa.repository.config.EnableJpaAuditing;

@SpringBootApplication
@EnableJpaAuditing
public class WingsErpApplication {

	public static void main(String[] args) {
		SpringApplication.run(WingsErpApplication.class, args);
	}

}
