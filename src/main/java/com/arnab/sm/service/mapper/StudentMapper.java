package com.arnab.sm.service.mapper;

import com.arnab.sm.domain.Department;
import com.arnab.sm.domain.Student;
import com.arnab.sm.service.dto.DepartmentDTO;
import com.arnab.sm.service.dto.StudentDTO;
import org.mapstruct.*;

/**
 * Mapper for the entity {@link Student} and its DTO {@link StudentDTO}.
 */
@Mapper(componentModel = "spring")
public interface StudentMapper extends EntityMapper<StudentDTO, Student> {
    @Mapping(target = "department", source = "department", qualifiedByName = "departmentId")
    StudentDTO toDto(Student s);

    @Named("departmentId")
    @BeanMapping(ignoreByDefault = true)
    @Mapping(target = "id", source = "id")
    DepartmentDTO toDtoDepartmentId(Department department);
}
