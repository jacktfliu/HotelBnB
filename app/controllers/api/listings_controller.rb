class Api::ListingsController < ApplicationController
    before_action :require_logged_in, only: [:create]

    def index 
        @listings = Listing.all
        render 'api/listings/index'
    end

    def show 
        @listing = Listing.find(params[:id])
    end

    def create 
        @listing = Listing.new(listing_params)

        if @listing.save 
            render :show
        else 
            render json: @listing.errors.full_messages, status: 422
        end
    end

    def update
        @listing = listing.find(params[:id])

        if @listing && @listing.update(listing_params)
            render :show
        else 
            render json: @spot.errors.full_messages, status: 422
        end
    end

    private 

    def listing_params
        params.require(:listing).permit(
            :title, 
            :price, 
            :description, 
            :location, 
            :bedroom, 
            :bathroom, 
            :longitude, 
            :latitude
        )
    end

    def bounds
        params[:bounds]
    end
end