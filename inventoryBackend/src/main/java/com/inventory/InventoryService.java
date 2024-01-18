package com.inventory;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Optional;

@Service
public class InventoryService {

    @Autowired
    private InventoryRepository inventoryRepository;

    public List<InventoryItem> getAllItems() {
        return inventoryRepository.findAll();
    }

    public Optional<InventoryItem> getItemById(String id) {
        return inventoryRepository.findById(id);
    }

    public InventoryItem addItem(InventoryItem item) {
        return inventoryRepository.save(item);
    }

    public void updateItem(String id, InventoryItem updatedItem) {
        updatedItem.setId(id);
        inventoryRepository.save(updatedItem);
    }

    public void deleteItem(String id) {
        inventoryRepository.deleteById(id);
    }
}
