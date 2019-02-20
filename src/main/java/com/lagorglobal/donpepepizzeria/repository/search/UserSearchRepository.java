package com.lagorglobal.donpepepizzeria.repository.search;

import com.lagorglobal.donpepepizzeria.domain.User;
import org.springframework.data.elasticsearch.repository.ElasticsearchRepository;

/**
 * Spring Data Elasticsearch repository for the User entity.
 */
public interface UserSearchRepository extends ElasticsearchRepository<User, Long> {
}
