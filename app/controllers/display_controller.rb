class DisplayController < ApplicationController
  def index
    location = Location.new
    @google_maps_api_key = Rails.application.secrets.google_maps_api_key
    puts @google_maps_api_key 
    puts "MAPS API KEY"
  end
end