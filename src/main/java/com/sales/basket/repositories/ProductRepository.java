package com.sales.basket.repositories;

import org.springframework.data.mongodb.repository.MongoRepository;
import com.sales.basket.models.Products;

public interface ProductRepository extends MongoRepository<Products, String> {
	
	@Override
    void delete(Products deleted);
}
