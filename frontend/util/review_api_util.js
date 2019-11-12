export const createReview = review => (
  $.ajax({
    method: 'POST',
    url: 'api/reviews',
    data: { review }
  })
);

export const deleteReview = (id) => (
  $.ajax({
    method: 'DELETE',
    url: `/api/reviews/${id}`
  })
);

export const updateReview = review => {
  return $.ajax({
    url: `/api/reviews/${review.id}`,
    method: 'PATCH',
    data: { review }
  });
};

export const fetchReview = reviewId => {
  return $.ajax({
    url: `/api/reviews/${reviewId}`,
    method: 'GET'
  });
};