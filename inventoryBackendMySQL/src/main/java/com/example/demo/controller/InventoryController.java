package com.example.demo.controller;

import com.example.demo.model.Inventory;
import com.example.demo.service.InventoryService;
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
    public List<Inventory> getAllInventory() {
        return inventoryService.getAllInventory();
    }

    @GetMapping("/{id}")
    public Optional<Inventory> getPersonById(@PathVariable Long id) {
        return inventoryService.getInventoryById(id);
    }

    @PostMapping
    public Inventory savePerson(@RequestBody Inventory person) {
        return inventoryService.saveInventory(person);
    }

    @PutMapping("/{id}")
    public Inventory updatePerson(@PathVariable Long id, @RequestBody Inventory updatedInventory) {
        Optional<Inventory> existingPerson = inventoryService.getInventoryById(id);

        if (existingPerson.isPresent()) {
            Inventory inventory = existingPerson.get();
            inventory.setItemName(updatedInventory.getItemName());
            return inventoryService.saveInventory(inventory);
        } else {
            throw new RuntimeException("Inventory not found with id: " + id);
        }
    }

    @DeleteMapping("/{id}")
    public void deletePerson(@PathVariable Long id) {
        inventoryService.deletePerson(id);
    }
}

