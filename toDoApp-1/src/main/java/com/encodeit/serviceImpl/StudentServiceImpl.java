package com.encodeit.serviceImpl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.encodeit.entity.Student;
import com.encodeit.repository.StudentRepository;
import com.encodeit.service.StudentService;

@Service
public class StudentServiceImpl implements StudentService {

	@Autowired
	private StudentRepository studentRepository;

	@Override
	public Student createStudent(Student student) {
		return studentRepository.save(student);
	}

	@Override
	public List<Student> listAllStudent() {
		return studentRepository.findAll();
	}

	@Override
	public Student getStudentById(int id) {
		return studentRepository.findById(id).get();
	}

	@Override
	public Student updateStudent(int id, Student student) {
		Student todo2 = studentRepository.findById(id).get();

		todo2.setName(student.getName());
		todo2.setEmail(student.getEmail());

		Student updatedTodo = studentRepository.save(todo2);
		return updatedTodo;
	}

	@Override
	public void deleteStudent(int id) {
		studentRepository.deleteById(id);
	}

}
