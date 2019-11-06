class Api::CampsController < ApplicationController
  def show 
    @camp = Camp.find(params[:id])
    render :show
  end

  def index
    @camps = Camp.all 
    render :index
  end

end


