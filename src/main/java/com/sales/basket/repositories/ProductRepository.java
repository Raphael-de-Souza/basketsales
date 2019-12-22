package com.sales.basket.repositories;

import org.springframework.data.mongodb.repository.MongoRepository;
import com.sales.basket.models.Product;

public interface ProductRepository extends MongoRepository<Product, String> {
	
	@Override
    void delete(Product deleted);
}
