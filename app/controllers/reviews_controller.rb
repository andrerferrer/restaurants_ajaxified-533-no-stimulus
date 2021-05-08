class ReviewsController < ApplicationController
  def create
    @review = Review.new(strong_params)
    @restaurant = Restaurant.find(params[:restaurant_id])
    @review.restaurant = @restaurant
    if @review.save
      redirect_to restaurant_path(@restaurant.id)
    else
      render 'restaurants/show'
    end
  end

  private

  def strong_params
    params.require(:review)
          .permit(:content)
  end
end
