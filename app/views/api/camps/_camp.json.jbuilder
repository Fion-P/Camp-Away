json.extract! camp, :id, :camp_name, :host_id, :location, :longitude , :latitude, 
            :max_guests, :availability, :description , :minimum_nights, :price , 
            :checkin_time, :checkout_time , :elevation , :terrain , 
            :weather, :activities, :portable_water , :picnic_tables, :bins , 
            :kitchen, :showers, :wifi , :toilet , :campfires, 
            :pets , :lodging_type

if camp.photos.attached? 
  # json.photoUrl url_for(camp.photo)
  json.photoUrls camp.photos.map { |file| url_for(file) }
end
