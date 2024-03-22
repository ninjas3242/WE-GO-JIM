package com.javatechie.crud.example.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.javatechie.crud.example.entity.User;

public interface UserRepository extends JpaRepository<User, Long> {
    User findByUsername(String username);
    User findByEmail(String email);
}
