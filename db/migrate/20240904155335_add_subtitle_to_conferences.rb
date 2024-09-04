class AddSubtitleToConferences < ActiveRecord::Migration[6.1]
  def change
    add_column :conferences, :subtitle, :text
  end
end
