class CreateBlogzs < ActiveRecord::Migration[6.1]
  def change
    create_table :blogzs do |t|
      t.string :title
      t.string :content
      t.string :author
      t.string :img

      t.timestamps
    end
  end
end
