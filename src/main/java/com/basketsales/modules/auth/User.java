package com.basketsales.modules.auth;

import java.util.Set;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.Data;

@Document(collection = "users")
public @Data class User {
    
    @Id
    private String id;
    
    //@Indexed(unique = true, direction = IndexDirection.DESCENDING, dropDups = true)
    private String email;
    
    private String password;
    private String fullName;
    private boolean enabled;
    
    @DBRef
    private Set<Role> roles;

}
