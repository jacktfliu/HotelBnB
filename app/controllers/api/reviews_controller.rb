class Api::ReviewsController < ApplicationController
  before_action :require_logged_in

  def show 
    @review = Review.find(params[:id])
  end

  def index 
    @reviews = Review.all
    render :index 
  end

  def create
    # puts review_params
    @review = Review.new(review_params)
    
    if @review.save
      render :show
    else
      render json: @review.errors.full_messages, status: 422
    end
  end

  def destroy
    @review = Review.find(params[:id])

    if @review.destroy
        render :show
    else 
        render json: @review.errors.full_messages, status: 403
    end
  end

  private

  def review_params 
    params.require(:review).permit(:listing_id, :rating, :body, :user_id)
  end
end
