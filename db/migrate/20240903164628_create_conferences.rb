class CreateConferences < ActiveRecord::Migration[6.1]
  def change
    create_table :conferences do |t|
      t.string :title
      t.text :description
      t.string :location
      t.datetime :date

      t.timestamps
    end
  end
end
