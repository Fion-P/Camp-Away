export const fetchCamps = (filters) => (
  $.ajax({
    method: 'GET',
    url: '/api/camps',
    data: filters
  })
);

export const fetchCamp = id => (
  $.ajax({
    method: 'GET',
    url: `/api/camps/${id}`
  })
);

