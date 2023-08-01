package com.encodeit.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.encodeit.entity.Student;

public interface StudentRepository extends JpaRepository<Student, Integer> {

}
