package com.basketsales.modules.product;

import org.springframework.data.mongodb.repository.MongoRepository;

public interface ProductRepository extends MongoRepository<Product, String> {
	
	@Override
    void delete(Product deleted);
}
