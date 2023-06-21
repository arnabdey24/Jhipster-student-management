package com.arnab.sm.repository;

import com.arnab.sm.domain.Student;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * Spring Data JPA repository for the Student entity.
 */
@SuppressWarnings("unused")
@Repository
public interface StudentRepository extends JpaRepository<Student, Long> {
    String FILTER_QUERY =   "select b " +
                            "from student b where " +
                            "UPPER(b.name) like CONCAT('%',UPPER(:name),'%') ";
//    @Query(value = FILTER_QUERY,nativeQuery = true)


    @Query(value = "select model from Student model " +
        "where lower(model.name) like concat('%', lower(:name) ,'%') ")
    Page<Student> filter(String name, Pageable pageable);
}
