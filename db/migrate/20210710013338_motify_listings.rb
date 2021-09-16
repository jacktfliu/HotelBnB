class MotifyListings < ActiveRecord::Migration[5.2]
  def change
    remove_column :listings, :owner_id

    add_column :listings, :owner_id, :integer
  end
end
