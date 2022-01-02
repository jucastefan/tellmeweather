import moment from 'moment'

const getCurrentDayForecast = (data, title) => ({
  weekday: moment(data.applicable_date).format('dddd'),
  date: moment(data.applicable_date).format('MMMM Do'),
  location: title,
  temperature: Math.round(data.the_temp),
  weatherDescription: data.weather_state_name,
})

export default getCurrentDayForecast
