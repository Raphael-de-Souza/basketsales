package com.basketsales.modules.product;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

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
    public Iterable<Product> product() {
        return productService.findAll();
    }
}
