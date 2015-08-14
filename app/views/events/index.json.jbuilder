json.array!(@events) do |event|
  json.extract! event, :id, :title, :start, :end, :datetime
  json.url event_url(event, format: :json)
end
