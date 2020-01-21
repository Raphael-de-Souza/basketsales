package com.sales.basket.models;

import java.util.Date;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.Data;

@Document(collection = "orders")
public @Data class Order {
	@Id
	private String id;
	private Products product;
	private int quantity;
	private User user;
	private Date date;

}
