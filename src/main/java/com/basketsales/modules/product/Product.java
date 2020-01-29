package com.basketsales.modules.product;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.Data;;

@Document(collection = "products")
public @Data class Product {
	
	@Id
    private String id;
	private String prodName;
	private String prodDesc;
	private Double prodPrice;
	private String prodImage;
	
}
