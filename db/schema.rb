# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2019_11_06_020158) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "camps", force: :cascade do |t|
    t.string "camp_name", null: false
    t.integer "host_id", null: false
    t.string "location", null: false
    t.float "longitude", null: false
    t.float "latitude", null: false
    t.integer "max_guests", null: false
    t.boolean "availability", null: false
    t.text "description", null: false
    t.integer "minimum_nights", null: false
    t.float "price", null: false
    t.string "checkin_time", null: false
    t.string "checkout_time", null: false
    t.integer "elevation", null: false
    t.string "terrain", null: false
    t.string "weather", null: false
    t.text "activities", default: [], array: true
    t.boolean "portable_water", default: false, null: false
    t.boolean "picnic_tables", default: false, null: false
    t.boolean "bins", default: false, null: false
    t.boolean "kitchen", default: false, null: false
    t.boolean "showers", default: false, null: false
    t.boolean "wifi", default: false, null: false
    t.boolean "toilet", default: false, null: false
    t.boolean "campfires", default: false, null: false
    t.boolean "pets", default: false, null: false
    t.string "lodging_type", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["camp_name"], name: "index_camps_on_camp_name", unique: true
    t.index ["host_id"], name: "index_camps_on_host_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "username", null: false
    t.string "email", null: false
    t.string "first_name", null: false
    t.string "last_name", null: false
    t.string "password_digest", null: false
    t.string "session_token", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["username"], name: "index_users_on_username", unique: true
  end

end
