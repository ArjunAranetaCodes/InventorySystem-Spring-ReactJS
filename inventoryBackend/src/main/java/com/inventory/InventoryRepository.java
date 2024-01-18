package com.inventory;

import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.Optional;

public interface InventoryRepository extends MongoRepository<InventoryItem, String> {
    Optional<InventoryItem> findById(String id);

    void deleteById(String id);
}

