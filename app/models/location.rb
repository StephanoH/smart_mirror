class Location < ApplicationRecord
  acts_as_mappable
  geocode_ip_address
end