class AddForeignKeyToBlogz < ActiveRecord::Migration[6.1]
  def change
    add_column :comments, :blogz_id, :integer 
  end
end
