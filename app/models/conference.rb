class Conference < ApplicationRecord

  def self.generate_subtitle
    role = Faker::Job.title
    people = Faker::Company.bs.capitalize
    action = Faker::Company.catch_phrase.split(' ').first
    topic = Faker::Company.industry
  
    "#{role}s and #{people} #{action} on the future of #{topic}"
  end

end
