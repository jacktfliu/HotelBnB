class CreateListings < ActiveRecord::Migration[5.2]
  def change
    create_table :listings do |t|
      t.string :title, null: false 
      t.integer :price, null: false 
      t.text :description, null: false
      t.string :location, null: false 
      t.integer :bedroom, null: false 
      t.integer :bathroom, null: false 
      t.integer :longitude, null: false 
      t.integer :latitude, null: false 
      t.integer :owner_id, null: false 

      t.timestamps
    end

    add_index :listings, :owner_id, unique: true
  end
end
