package com.inventory;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/inventory")
public class InventoryController {

    @Autowired
    private InventoryService inventoryService;

    @GetMapping
    public List<InventoryItem> getAllItems() {
        return inventoryService.getAllItems();
    }

    @GetMapping("/{id}")
    public Optional<InventoryItem> getItemById(@PathVariable String id) {
        return inventoryService.getItemById(id);
    }

    @CrossOrigin(origins = "http://localhost:8080")
    @PostMapping
    public InventoryItem addItem(@RequestBody InventoryItem item) {
        return inventoryService.addItem(item);
    }

    @CrossOrigin
    @PutMapping("/{id}")
    public void updateItem(@PathVariable String id, @RequestBody InventoryItem updatedItem) {
        inventoryService.updateItem(id, updatedItem);
    }

    @CrossOrigin
    @DeleteMapping("/{id}")
    public void deleteItem(@PathVariable String id) {
        inventoryService.deleteItem(id);
    }
}

