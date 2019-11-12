import * as APIUtil from '../util/review_api_util';

export const RECEIVE_REVIEW = 'RECEIVE_REVIEW';
export const REMOVE_REVIEW = 'REMOVE_REVIEW';

const receiveReview = ({ review, author }) => ({
  type: RECEIVE_REVIEW,
  review,
  author,
});

export const removeReview = (id) => ({
  type: REMOVE_REVIEW,
  id
})

export const createReview = review => dispatch => (
  APIUtil.createReview(review).then(review => (
    dispatch(receiveReview(review))
  ))
);

export const deleteReview = id => dispatch => (
  APIUtil.deleteReview(id)
    .then(() => dispatch(removeReview(id)))
)

export const updateReview = review => dispatch => (
  APIUtil.updateReview(review)
    .then((review) => dispatch(receiveReview(review)))
);

export const fetchReview = reviewId => dispatch => {
  return APIUtil.fetchReview(reviewId)
    .then(review => dispatch(receivereview(review)));
};
