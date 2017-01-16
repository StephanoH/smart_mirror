class CreateLocations < ActiveRecord::Migration[5.0]
  def change
    create_table :locations do |t|
      t.string :latitude
      t.string :longitude
      t.string :city
      t.string :state
      t.timestamps(null:false)
    end
  end
end
