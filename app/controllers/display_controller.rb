class DisplayController < ApplicationController
  def index
    location = Location.new
    @google_maps_api_key = Rails.application.secrets.google_maps_api_key
  end
end