class DisplayController < ApplicationController
  def index
    location = Location.new
    puts location.local_ip
  end
end