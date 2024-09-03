package com.example.demo.repository;

import com.example.demo.model.Account;
import com.example.demo.model.Inventory;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface AccountRepository extends JpaRepository<Account, Long> {
    Optional<Account> findById(Long id);

    void deleteById(Long id);
}
