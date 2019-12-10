class Api::CampsController < ApplicationController
  def show 
    @camp = Camp.includes(:bookings).includes(:reviews).includes(:host).with_attached_photos.find(params[:id])
    render :show
  end

  def index
  # @camps = Camp.all
  if params[:bounds]
      @camps = Camp.all.select { |camp| camp.with_attached_photos.includes(:host).includes(:bookings).in_bounds(params[:bounds]) }
    else
      @camps = Camp.all
    end
  end

  private
  
end
