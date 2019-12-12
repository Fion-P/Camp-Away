json.camp do
  json.partial! '/api/camps/camp', camp: @camp
  json.reviewIds @camp.reviews.pluck(:id)
end

@camp.reviews.includes(:author).each do |review|
  json.reviews do
    json.set! review.id do
      json.partial! 'api/reviews/review', review: review
    end
  end

  json.authors do
    json.set! review.author.id do
      # json.extract! review.author, :id, :username, :first_name, :last_name
      json.partial! "/api/users/user", user: review.author
    end
  end
end

json.host do 
  json.partial! "/api/users/user", user: @camp.host
end
