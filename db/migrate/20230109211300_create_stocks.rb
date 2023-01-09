class CreateStocks < ActiveRecord::Migration[6.1]
  def change
    create_table :stocks do |t|
      t.integer :user_id
      t.integer :ingredient_id
      t.integer :amount
      t.integer :all_day_amount
      t.boolean :all_day

      t.timestamps
    end
  end
end
