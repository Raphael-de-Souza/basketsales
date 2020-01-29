package com.basketsales.modules.order;

import java.util.Date;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import com.basketsales.modules.auth.User;
import com.basketsales.modules.product.Product;

import lombok.Data;

@Document(collection = "orders")
public @Data class Order {
	@Id
	private String id;
	private Product product;
	private int quantity;
	private User user;
	private Date date;

}
