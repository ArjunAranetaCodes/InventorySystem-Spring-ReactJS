package com.example.demo.controller;

import com.example.demo.model.Account;
import com.example.demo.model.Inventory;
import com.example.demo.service.AccountService;
import com.example.demo.service.InventoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/account")
public class AccountController {
    @Autowired
    private AccountService accountService;

    @GetMapping
    public List<Account> getAllAccount() {
        return accountService.getAllAccount();
    }

    @GetMapping("/{id}")
    public Optional<Account> getPersonById(@PathVariable Long id) {
        return accountService.getAccountById(id);
    }

    @PostMapping
    public Account savePerson(@RequestBody Account person) {
        return accountService.saveAccount(person);
    }

    @PutMapping("/{id}")
    public Account updatePerson(@PathVariable Long id, @RequestBody Account updatedAccount) {
        Optional<Account> existingPerson = accountService.getAccountById(id);

        if (existingPerson.isPresent()) {
            Account acc = existingPerson.get();
            acc.setUsername(updatedAccount.getUsername());
            return accountService.saveAccount(acc);
        } else {
            throw new RuntimeException("Account not found with id: " + id);
        }
    }

    @DeleteMapping("/{id}")
    public void deleteAccount(@PathVariable Long id) {
        accountService.deleteAccount(id);
    }
}

