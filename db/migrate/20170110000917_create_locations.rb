class CreateLocations < ActiveRecord::Migration[5.0]
  def change
    create_table :locations do |t|
      t.float :latitude
      t.float :longitude
      t.string :city
      t.string :state
      t.timestamps(null:false)
    end
  end
end
