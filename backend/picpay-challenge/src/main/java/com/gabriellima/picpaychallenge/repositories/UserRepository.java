package com.gabriellima.picpaychallenge.repositories;

import com.gabriellima.picpaychallenge.domain.user.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
}
