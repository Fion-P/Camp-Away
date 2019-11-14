# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require "open-uri"

Review.destroy_all
Booking.destroy_all
Camp.destroy_all
User.destroy_all

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
# debugger
rustic_cabin = Camp.create!({
  camp_name: "Rustic Cabin",
  location: "California",
  host_id: fion.id,
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
})
# rustic_cabin.photo.attach(io: open("https://campaway-dev.s3-us-west-1.amazonaws.com/rustic_cabin/Screen+Shot+2019-11-13+at+5.21.46+PM.png"), filename: "rustic_cabin1")

rustic_cabin_urls= [
  "https://campaway-dev.s3-us-west-1.amazonaws.com/rustic_cabin/rustic-cabin2.png",
  "https://campaway-dev.s3-us-west-1.amazonaws.com/rustic_cabin/Screen+Shot+2019-11-13+at+5.21.46+PM.png",
  "https://campaway-dev.s3-us-west-1.amazonaws.com/rustic_cabin/rustic-cabin3.png"
]
rustic_cabin_urls.each_with_index do |url, i|
  rustic_cabin.photos.attach(io: open(url), filename:"rustic#{i+1}.jpg")
end


cunningham = Camp.create!({
  camp_name: "The farm at Cunningham Marsh",
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
})
# cunningham.photo.attach(io: open("https://campaway-dev.s3-us-west-1.amazonaws.com/cunningham-marsh/marsh1.png"), filename: "cunningham1")
cunningham_urls= [
  "https://campaway-dev.s3-us-west-1.amazonaws.com/cunningham-marsh/marsh0.png",
  "https://campaway-dev.s3-us-west-1.amazonaws.com/cunningham-marsh/marsh1.png",
  "https://campaway-dev.s3-us-west-1.amazonaws.com/cunningham-marsh/marsh2.png",
  "https://campaway-dev.s3-us-west-1.amazonaws.com/cunningham-marsh/marsh3.png"
]
cunningham_urls.each_with_index do |url, i|
  cunningham.photos.attach(io: open(url), filename:"cunningham#{i+1}.jpg")
end


baja_camper = Camp.create!({
  camp_name: "Colorful Baja Camper",
  host_id: danna.id,
  location: "California",
  longitude: -119.216560,
  latitude: 38.285206,
  max_guests: 3,
  availability: true,
  description: "Pet-friendly Baja camper was inspired by our love for the Mexican culture, art, and hospitality. It carries Baja vibes in its vibrant colors and original details and offers great lake and mountain views.",
  minimum_nights: 4,
  price: 150,
  checkin_time: "After 3PM",
  checkout_time: "Before 11AM",
  elevation: 6468,
  terrain: "Desert",
  weather: "40",
  activities: ["Biking", "Hiking", "Horseback riding", "OHV", "Climbing", "Wildlife Watching", "Boating"],
  portable_water: true, 
  picnic_tables: true, 
  kitchen: true,
  bins: true,
  showers: true,
  wifi: true,
  toilet: true,
  campfires: true,
  pets: true,
  lodging_type: "Cabin"
})
# baja_camper.photo.attach(io: open("https://campaway-dev.s3-us-west-1.amazonaws.com/Hidden+Valley+Campground/hidden-valley1.png"), filename: "baja_camper1")
baja_camper_urls= [
  "https://campaway-dev.s3-us-west-1.amazonaws.com/baja/baja1.png",
  "https://campaway-dev.s3-us-west-1.amazonaws.com/baja/baja2.png",
  "https://campaway-dev.s3-us-west-1.amazonaws.com/baja/baja3.png"
]
baja_camper_urls.each_with_index do |url, i|
  baja_camper.photos.attach(io: open(url), filename:"baja_camper#{i+1}.jpg")
end


pensione = Camp.create!({
  camp_name: "The Desert Pensione Joshua Tree",
  host_id: danna.id,
  location: "California",
  longitude: -116.262915,
  latitude: 34.136089,
  max_guests: 6,
  availability: true,
  description: "We invite you to sleep in our 'rustic bohemian' cabin (unfurnished) with solar electricity and cozy patio! Excellent cell reception, solar powered plugs, potable wash up sink and water spigot, PLUS shared bathroom with flush toilet and extra wash up sink. Easy drive to Joshua Tree National Park and 3 minutes to JT village with local shopping, JT Saloon, Saturday Farmer's Market.",
  minimum_nights: 1,
  price: 75,
  checkin_time: "After 2PM",
  checkout_time: "Before 12PM",
  elevation: 2534,
  terrain: "Desert",
  weather: "60",
  activities: ["Biking", "Climbing", "Wildlife Watching"],
  portable_water: true, 
  picnic_tables: true, 
  kitchen: false,
  bins: true,
  showers: true,
  wifi: false,
  toilet: true,
  campfires: true,
  pets: true,
  lodging_type: "Cabin"
})
# pensione.photo.attach(io: open("https://campaway-dev.s3-us-west-1.amazonaws.com/Hidden+Valley+Campground/hidden-valley1.png"), filename: "pensione1")
pensione_urls= [
  "https://campaway-dev.s3-us-west-1.amazonaws.com/pensione/pensione1.png",
  "https://campaway-dev.s3-us-west-1.amazonaws.com/pensione/pensione2.png",
  "https://campaway-dev.s3-us-west-1.amazonaws.com/pensione/pensione3.png"
]
pensione_urls.each_with_index do |url, i|
  pensione.photos.attach(io: open(url), filename:"pensione#{i+1}.jpg")
end


writers = Camp.create!({
  camp_name: "Writer's Cabin on Lore Mountain",
  host_id: danna.id,
  location: "California",
  longitude: -122.525016,
  latitude: 38.826035,
  max_guests: 2,
  availability: true,
  description: "A place that begs you to leave your phone in the car, invites quiet contemplation, meandering walks with wine in hand to valley overlooks, cooking meals and eating outside on the back deck while the sun rises, sets or hangs in the sky, or the simple act of grabbing a sunrise-inspired cup of coffee. Minutes later, you are sitting among the century-old olive trees in the lower meadow. If this is what you need, the Writer's Cabin is for you.",
  minimum_nights: 2,
  price: 195,
  checkin_time: "After 4PM",
  checkout_time: "Before 12PM",
  elevation: 1832,
  terrain: "Forest",
  weather: "57",
  activities: ["Boating", "Wildlife Watching"],
  portable_water: true, 
  picnic_tables: true, 
  kitchen: true,
  bins: true,
  showers: true,
  wifi: true,
  toilet: true,
  campfires: false,
  pets: false,
  lodging_type: "Cabin"
})
# writers.photo.attach(io: open("https://campaway-dev.s3-us-west-1.amazonaws.com/Hidden+Valley+Campground/hidden-valley1.png"), filename: "writers1")
writers_urls= [
  "https://campaway-dev.s3-us-west-1.amazonaws.com/writers/writers1.png",
  "https://campaway-dev.s3-us-west-1.amazonaws.com/writers/writers2.png",
  "https://campaway-dev.s3-us-west-1.amazonaws.com/writers/writers3.png"
]
writers_urls.each_with_index do |url, i|
  writers.photos.attach(io: open(url), filename:"writers#{i+1}.jpg")
end


hidden_valley = Camp.create!({
  camp_name: "Hidden Valley Campground",
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
})
# hidden_valley.photo.attach(io: open("https://campaway-dev.s3-us-west-1.amazonaws.com/Hidden+Valley+Campground/hidden-valley1.png"), filename: "hidden_valley1")
hidden_valley_urls= [
  "https://campaway-dev.s3-us-west-1.amazonaws.com/Hidden+Valley+Campground/hidden-valley1.png",
  "https://campaway-dev.s3-us-west-1.amazonaws.com/Hidden+Valley+Campground/hidden-valley2.png",
  "https://campaway-dev.s3-us-west-1.amazonaws.com/Hidden+Valley+Campground/hidden-valley3.png"
]
hidden_valley_urls.each_with_index do |url, i|
  hidden_valley.photos.attach(io: open(url), filename:"hidden_valley#{i+1}.jpg")
end