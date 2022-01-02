import React, { useState } from 'react'
import getCurrentDayForecast from '../helpers/getCurrentDayForecast'

const BASE_URL = 'https://www.metaweather.com/api/location'
const CROSS_DOMAIN = 'https://the-ultimate-api-challenge.herokuapp.com'
const REQUEST_URL = `${CROSS_DOMAIN}/${BASE_URL}`

const useForecast = () => {
  const [isError, setError] = useState(false)
  const [isLoading, setLoading] = useState(false)
  const [forecast, setForecast] = useState(null)

  const getWoeid = async (location) => {
    const response = await fetch(`${REQUEST_URL}/search/?query=${location}`)
    const data = await response.json()

    if (!data || data.length === 0) {
      setError("This location doesn't exist")
      setTimeout(() => {
        setError('')
      }, 2000)
      setLoading(false)
      return
    }

    return data[0]
  }

  const getForecastData = async (woeid) => {
    const response = await fetch(`${REQUEST_URL}/${woeid}`)
    const data = await response.json()
    if (!data || data.length === 0) {
      setError('Something went wrong')
      setTimeout(() => {
        setError('')
      }, 2000)
      setLoading(false)
      return
    }

    console.log(data)
    return data
  }

  const gatherForecastData = (data) => {
    const currentDay = getCurrentDayForecast(
      data.consolidated_weather[0],
      data.title,
    )
    setForecast(currentDay)
    setLoading(false)
  }

  const submitRequest = async (location) => {
    if (location === '' || location.length <= 1) {
      setError('Please type a location')
      setTimeout(() => {
        setError('')
      }, 2000)
      return
    }
    setLoading(true)
    setError(false)
    const response = await getWoeid(location)
    if (!response?.woeid) return

    const data = await getForecastData(response.woeid)
    if (!data) return

    console.log(data)
    gatherForecastData(data)
  }

  return {
    isError,
    isLoading,
    forecast,
    submitRequest,
  }
}

export default useForecast
