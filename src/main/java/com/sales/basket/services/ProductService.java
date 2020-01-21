package com.sales.basket.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;


import com.sales.basket.models.Products;
import com.sales.basket.repositories.ProductRepository;

@Service
public class ProductService {
    
    @Autowired
    private ProductRepository productRepository;

    @Transactional
    public List<Products> findAll() {
    	return productRepository.findAll();
    }
    
    @Transactional
    public Optional<Products> findbyId(final String productId) {
    	return productRepository.findById(productId);
    }
    
    @Transactional
    public void deleteProduct(final Products product) {
        productRepository.delete(product);
    }
    
    @Transactional
    public void saveProduct(final Products product) {
        productRepository.save(product);
    }
}
