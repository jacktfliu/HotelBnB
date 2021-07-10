class Api::ReviewsController < ApplicationController
  before_action :require_logged_in

  def show 

  end

  def create
    @review = Review.new(review_params)

    if @review.save
      render :show
    else
      render json: @review.errors.full_messages, status: 422
    end
  end

  def edit 

  end

  def update 

  end

  def destroy

  end

  private

  def review_params
    params.require(:review).permit()
  end
end
