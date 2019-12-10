class Api::ReviewsController < ApplicationController
  #resources :reviews, only: [:create, :show, :update, :destroy]
  before_action :require_login

  def create
    @review = Review.new(review_params)
    @review.user_id = current_user.id
    

    if @review.save
      render :show
    else
      render json: @review.errors.full_messages, status: 401
    end
  end

  def show
    # debugger
    @review = Review.includes(:author).includes(:camp).find(params[:id])
  end

  def update
    @review = current_user.reviews.find(params[:id])
    if @review.update(review_params)
      render :show 
    else 
      render json: @review.errors.full_messages, status: 401
    end

  end

  def destroy
    @review = current_user.reviews.find(params[:id])
    
    @review.destroy
    # debugger

    render json: @review
  end

  private

  def review_params 
    params.require(:review).permit(:user_id, :camp_id, :body, :helpful_count)
  end
end
