export const fetchCamps = () => (
  $.ajax({
    method: 'GET',
    url: '/api/camps',
  })
);

export const fetchCamp = id => (
  $.ajax({
    method: 'GET',
    url: `/api/camps/${id}`
  })
);

