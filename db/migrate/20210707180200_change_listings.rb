class ChangeListings < ActiveRecord::Migration[5.2]
  def change
    change_column_null(:listings, :price, false)
    change_column_null(:listings, :longitude, false)
    change_column_null(:listings, :latitude, false)
  end
end
