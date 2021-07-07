class ModifyListings < ActiveRecord::Migration[5.2]
  def change
    remove_column :listings, :price
    remove_column :listings, :longitude
    remove_column :listings, :latitude

    add_column :listings, :price, :float
    add_column :listings, :longitude, :float
    add_column :listings, :latitude, :float
  end
end
