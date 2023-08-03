package com.encodeit.service;

import java.util.List;

import com.encodeit.entity.Student;

public interface StudentService {

	Student createStudent(Student student);

	List<Student> listAllStudent();

	Student getStudentById(int id);

	Student updateStudent(int id, Student student);

	List<Student> deleteStudent(int id);
}
