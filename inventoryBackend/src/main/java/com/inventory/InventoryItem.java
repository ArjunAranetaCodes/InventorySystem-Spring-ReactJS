package com.inventory;

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Data
@Document(collection = "items")
public class InventoryItem {
    @Id
    private String id;
    private String name;
    private int quantity;
    // Add other fields as needed
}

