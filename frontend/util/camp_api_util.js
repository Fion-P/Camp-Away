export const fetchCamps = (filters) => {
  // debugger
  return $.ajax({
    method: 'GET',
    url: '/api/camps',
    data: {
      bounds: filters
    }
  });
};

export const fetchCamp = id => (
  $.ajax({
    method: 'GET',
    url: `/api/camps/${id}`
  })
);

