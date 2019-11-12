import * as APIUtil from '../util/camp_api_util';

export const RECEIVE_CAMPS = 'RECEIVE_CAMPS';
export const RECEIVE_CAMP = 'RECEIVE_CAMP';

export const receiveCamps = camps => ({
  type: RECEIVE_CAMPS,
  camps,
});

export const receiveCamp = ({ camp, reviews, authors }) => ({
  type: RECEIVE_CAMP,
  camp,
  reviews,
  authors,
});

export const fetchCamps = () => dispatch => (
  APIUtil.fetchCamps().then(camps => (
    dispatch(receiveCamps(camps))
  ))
);

export const fetchCamp = id => dispatch => (
  APIUtil.fetchCamp(id).then(camp => (
    dispatch(receiveCamp(camp))
  ))
);


