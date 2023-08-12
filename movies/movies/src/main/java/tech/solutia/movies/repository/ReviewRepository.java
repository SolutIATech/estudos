package tech.solutia.movies.repository;

import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;
import tech.solutia.movies.entity.Review;

@Repository
public interface ReviewRepository extends MongoRepository<Review, ObjectId> {

}
