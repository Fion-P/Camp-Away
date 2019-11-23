class Api::CampsController < ApplicationController
  def show 
    @camp = Camp.includes(:host).find(params[:id])
    render :show
  end

  def index
    @camps = Camp.all
    render :index
  end

end


