json.array! @camps do |camp|
  json.partial! 'api/camps/camp', camp: camp
end