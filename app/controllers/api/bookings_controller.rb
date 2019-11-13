class Api::BookingsController < ApplicationController

  before_action :require_login

  def create 
    debugger
    @booking = Booking.new(booking_params)
    @booking.user_id = current_user.id
    # debugger
    if @booking.save
      render :show
    else 
      render json: @booking.errors.full_messages, status: 401
    end
  end

  def show
    @booking = current_user.bookings.find(params[:id])
  end

  def update
    @booking = current_user.bookings.find(params[:id])

    if @booking.update(booking_params)
      render :show
    else 
      render json: @booking.errors.full_messages, status: 401
    end
  end

  def destroy 
    @booking = current_user.bookings.find(params[:id])

    @booking.destroy

    render json: @booking
  end

  private

  def booking_params 
    params.require(:booking).permit(:camp_id, :user_id, :num_guests, :check_in, :check_out)
  end
end
