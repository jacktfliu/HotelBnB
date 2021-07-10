class MotifyListingOwner < ActiveRecord::Migration[5.2]
  def change
    change_column_null(:listings, :owner_id, false)
  end
end
