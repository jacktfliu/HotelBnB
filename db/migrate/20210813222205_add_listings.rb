class AddListings < ActiveRecord::Migration[5.2]
  def change
    add_column :listings, :host_name, :string
    add_column :listings, :city, :string
    add_column :reviews, :review_name, :string
  end
end
