class LocationController < ApplicationController
  def create
    location = Location.new(location_params)
    if location.save
      render json: {message: "Saved"}
    else
      render json: {message: "Error"}
    end
  end

  private

  def location_params
    params.permit(:latitude, :longitude, :city, :state)
  end
end