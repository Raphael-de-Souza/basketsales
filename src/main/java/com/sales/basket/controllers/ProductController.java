package com.sales.basket.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.sales.basket.models.Products;
import com.sales.basket.services.ProductService;

@CrossOrigin(origins = "*")
@RequestMapping("/api")
@RestController
public class ProductController {

    @Autowired
    ProductService productService;

    /**
	 * Get Products.
	 * @return List<Product>
	 */
    @RequestMapping(method = RequestMethod.GET, value = "/products")
    public Iterable<Products> product() {
        return productService.findAll();
    }
}
