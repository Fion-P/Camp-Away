class Api::CampsController < ApplicationController
  def show 
    @camp = Camp.includes(:reviews).includes(:host).includes(:review_authors).with_attached_photos.find(params[:id])
    render :show
  end

  def index
    # debugger
    camps = bounds ? Camp.in_bounds(bounds) : Camp.all
    @camps = camps.with_attached_photos
    # if params[:bounds]
    #   @camps = Camp.all.select { |camp| camp.with_attached_photos.includes(:host).includes(:bookings).in_bounds(params[:bounds]) }
    # else
    #   @camps = Camp.all
    # end
  end

  private
  
  def bounds
    params[:bounds]
  end

end
