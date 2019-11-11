export const createBooking = booking => (
  $.ajax({
    method: 'POST',
    url: '/api/bookings',
    data: { booking }
  })
);

export const fetchBooking = id => (
  $.ajax({
    method: 'GET',
    url: `/api/bookings/${id}`
  })
);

export const updateBooking = booking => (
  $.ajax({
    method: 'PATCH',
    url: `/api/bookings/${booking.id}`,
    data: { booking }
  })
);

export const deleteBooking = bookingId => (
  $.ajax({
    method: 'DELETE',
    url: `api/bookings/${bookingId}`,
  })
);