class Api::CampsController < ApplicationController
  def show 
    @camp = Camp.includes(:host).includes(:bookings).with_attached_photos.find(params[:id])
    render :show
  end

  def index
  # @camps = Camp.all
  if params[:bounds]
      @camps = Camp.all.select { |camp| camp.with_attached_photos.in_bounds(params[:bounds]) }
    else
      @camps = Camp.all
    end
  end

  private
  
end
