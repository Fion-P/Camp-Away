# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Camp.destroy_all

# ============================ Users ========================================

demo_user = User.create!({
    first_name: "Guest", 
    last_name: "Demo", 
    email: "DemoUser@gmail.com",
    username: "DemoUser",
    password: "password"
})

fion = User.create!({
    first_name: "Fion", 
    last_name: "Pang", 
    email: "fion@gmail.com",
    username: "Fion",
    password: "password"
})

danna = User.create!({
    first_name: "Danna", 
    last_name: "Xu", 
    email: "danna@gmail.com",
    username: "Danna",
    password: "password"
})


# ============================== Campgrounds ===================================

Camp.create!(camp_name: "Rustic Cabin",
  host_id: fion.id,
  location: "California",
  longitude: -120.752536,
  latitude: 35.56669,
  max_guests: 2,
  availability: true,
  description: "Cozy, rustic, romantic cabin completely renovated tucked away in the rolling hills of wine country. Peaceful setting, with many views of famous winery's and rolling hay fields.",
  minimum_nights: 1,
  price: 220,
  checkin_time: "After 2PM",
  checkout_time: "Before 11AM",
  elevation: 996,
  terrain: "Flat",
  weather: "63",
  activities: ["Biking", "Hiking", "Wildlife Watching"],
  portable_water: true, 
  picnic_tables: true, 
  kitchen: false,
  bins: false,
  showers: true,
  wifi: false,
  toilet: true,
  campfires: true,
  pets: true,
  lodging_type: "Cabin"
)

Camp.create!(camp_name: "The farm at Cunningham Marsh",
  host_id: fion.id,
  location: "California",
  longitude: -122.802653,
  latitude: 38.367939,
  max_guests: 6,
  availability: true,
  description: "A private sanctuary tucked away, just 8 minutes from downtown Sebastopol, this property is not to be missed! We're a soon-to-be working organic veggie farm situated on 20 acres. 10 of the acres are a protected wildlife conservation (aka Cunningham Marsh) filled with trails, blackberries, a creek, and more!",
  minimum_nights: 1,
  price: 75,
  checkin_time: "After 2PM",
  checkout_time: "Before 11AM",
  elevation: 132,
  terrain: "Coastal",
  weather: "46",
  activities: ["Biking", "Boating", "Hiking", "Surfing", "Swimming", "Wildlife Watching"],
  portable_water: true, 
  picnic_tables: true, 
  kitchen: false,
  bins: true,
  showers: true,
  wifi: false,
  toilet: true,
  campfires: true,
  pets: false,
  lodging_type: "Tents"
)

Camp.create!(camp_name: "Hidden Valley Campground",
  host_id: danna.id,
  location: "California",
  longitude: -116.161516,
  latitude: 34.017191,
  max_guests: 6,
  availability: true,
  description: "Hidden Valley Campground is a good option for those looking to sleep among starry skies near the center of the park on their next Joshua Tree camping adventure. Just off Park Boulevard, this Joshua Tree National Park camping location offers nine campsites with picnic tables, fire rings, and pit toilets.",
  minimum_nights: 1,
  price: 50,
  checkin_time: "After 2PM",
  checkout_time: "Before 11AM",
  elevation: 4233,
  terrain: "Desert",
  weather: "67",
  activities: ["Biking", "Hiking", "Horseback riding", "OHV", "Climbing", "Wildlife Watching"],
  portable_water: false, 
  picnic_tables: true, 
  kitchen: false,
  bins: false,
  showers: true,
  wifi: false,
  toilet: true,
  campfires: true,
  pets: true,
  lodging_type: "Tents"
)
