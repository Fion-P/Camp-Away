json.extract! review,
    :id, :user_id, :camp_id, :helpful_count, :body, :created_at
    json.author_first review.author.first_name
    json.author_last review.author.last_name
    json.author_id review.author.id
