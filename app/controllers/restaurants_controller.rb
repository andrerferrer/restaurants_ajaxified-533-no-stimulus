class RestaurantsController < ApplicationController
  def index
    @restaurants = Restaurant.all
    # render :index.html.erb
    respond_to do |format|
      # html request
      format.html do
        # render the html
        render :index #html.erb
      end

      # json request
      format.json do
        # render the json
        response_hash = { restaurants: @restaurants, restaurant_count: @restaurants.length }
        render( { json: response_hash } )
      end
    end
  end

  def show
    @restaurant = Restaurant.find(params[:id])
    @review = Review.new # this here is for the form
  end
  
  def destroy
    @restaurant = Restaurant.find(params[:id])
    @restaurant.destroy
    redirect_to restaurants_path
  end
end
