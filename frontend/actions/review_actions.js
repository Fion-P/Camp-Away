import * as APIUtil from '../util/review_api_util';

export const RECEIVE_REVIEW = 'RECEIVE_REVIEW';
export const REMOVE_REVIEW = 'REMOVE_REVIEW';

const receiveReview = ({ review, author }) => ({
  type: RECEIVE_REVIEW,
  review,
  author,
});

export const removeReview = ({id, camp_id}) => ({
  type: REMOVE_REVIEW,
  id,
  camp_id
})

export const createReview = review => dispatch => (
  APIUtil.createReview(review).then(review => (
    dispatch(receiveReview(review))
  ))
);

export const deleteReview = id => dispatch => (
  APIUtil.deleteReview(id)
    .then((review) => dispatch(removeReview(review)))
)

export const updateReview = review => dispatch => (
  APIUtil.updateReview(review)
    .then((review) => dispatch(receiveReview(review)))
);

export const fetchReview = reviewId => dispatch => {
  return APIUtil.fetchReview(reviewId)
    .then(review => dispatch(receiveReview(review)));
};
