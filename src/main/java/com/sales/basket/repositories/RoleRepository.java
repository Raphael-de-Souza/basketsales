package com.sales.basket.repositories;

import org.springframework.data.mongodb.repository.MongoRepository;
import com.sales.basket.models.Role;

public interface RoleRepository extends MongoRepository<Role, String> {

	Role findByRole(String role);	
}
