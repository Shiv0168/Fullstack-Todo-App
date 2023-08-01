package com.encodeit.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.encodeit.entity.Student;
import com.encodeit.service.StudentService;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/student")
public class StudentController {

	@Autowired
	private StudentService studentService;

	@PostMapping
	public ResponseEntity<Student> createStudent(@RequestBody Student student) {
		return new ResponseEntity<>(studentService.createStudent(student), HttpStatus.CREATED);
	}

	@GetMapping
	public List<Student> getAllStudent() {
		return studentService.listAllStudent();
	}

	@GetMapping("/{id}")
	public ResponseEntity<Student> getStudentById(@PathVariable int id) {
		return new ResponseEntity<>(studentService.getStudentById(id), HttpStatus.OK);
	}

	@PutMapping("/{id}")
	public ResponseEntity<Student> updateStudent(@PathVariable int id, @RequestBody Student todo) {
		return new ResponseEntity<>(studentService.updateStudent(id, todo), HttpStatus.OK);
	}

	@DeleteMapping("/{id}")
	public ResponseEntity<String> deleteStudent(@PathVariable int id) {
		studentService.deleteStudent(id);
		return new ResponseEntity<>("Todo deleted successfully :)", HttpStatus.OK);
	}
}
