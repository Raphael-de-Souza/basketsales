package com.basketsales.modules.auth;

import org.springframework.data.mongodb.repository.MongoRepository;

public interface RoleRepository extends MongoRepository<Role, String> {

	Role findByRoleName(String role);	
}
