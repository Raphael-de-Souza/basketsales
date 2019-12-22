package com.sales.basket.models;

import java.util.Set;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.index.IndexDirection;
import org.springframework.data.mongodb.core.index.Indexed;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.Data;

@Document(collection = "users")
public @Data class User {
	
	@Id
    private Long id;
	
    private String name;
	
    @Indexed(unique = true, direction = IndexDirection.DESCENDING)
    private String email;
    
    private String password;
        
    private boolean enabled;
    
    @DBRef
    private Set<Role> roles;

}
