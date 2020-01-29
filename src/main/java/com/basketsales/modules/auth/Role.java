package com.basketsales.modules.auth;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.Data;

@Document(collection = "roles")
public @Data class Role {
	
	@Id
    //@Indexed(unique = true, direction = IndexDirection.DESCENDING, dropDups = true)
	private String id;
	private String roleName;   

}
