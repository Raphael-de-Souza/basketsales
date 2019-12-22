package com.sales.basket.repositories;

import org.springframework.data.mongodb.repository.MongoRepository;
import com.sales.basket.models.User;

public interface UserRepository extends MongoRepository<User, String> {

	User findByEmail(String email);
}
