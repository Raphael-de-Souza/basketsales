package com.sales.basket.models;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.Data;;

@Document(collection = "products")
public @Data class Product {
	
	@Id
	private Long id;
	private String nome;
	private Double valor;
	

}
