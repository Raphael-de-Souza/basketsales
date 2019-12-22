package com.sales.basket.models;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.index.IndexDirection;
import org.springframework.data.mongodb.core.index.Indexed;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.Data;

@Document(collection = "roles")
public @Data class Role {
	
	@Id
	@Indexed(unique = true, direction = IndexDirection.DESCENDING)
	private Long id;
	
	private String role;
    

}
