package com.gabriellima.picpaychallenge.repositories;

import com.gabriellima.picpaychallenge.domain.transaction.Transaction;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TransactionRepository extends JpaRepository<Transaction, Long> {
}
