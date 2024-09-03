# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Conference.destroy_all

10.times do
  Conference.create!(
    title: Faker::Book.title,  # Using Book titles as conference titles
    date: Faker::Date.between(from: '2024-09-01', to: '2024-12-31'),
    location: "#{Faker::Address.city}, #{Faker::Address.state_abbr}",
    description: Faker::Lorem.paragraph(sentence_count: 5)
  )
end

puts "Created #{Conference.count} conferences."