import React, { Fragment, useState } from 'react'
import Error from '../components/Error'
import Header from '../components/Header/Header'
import LoadingSpinner from '../components/LoadingSpinner/LoadingSpinner'
import SearchBar from '../components/SearchBar/SearchBar'
import classes from './Page.module.css'
import useForecast from '../hooks/useForecast'
import Forecast from '../components/Forecast/Forecast'

const Page = () => {
  const { isError, isLoading, forecast, submitRequest } = useForecast()

  const onSubmit = (value) => {
    submitRequest(value)
  }

  return (
    <main className="pb-5">
      <Fragment>
        <Header />
        {!forecast && 
          <div>
            {isError && <Error message={isError} />}
            {isLoading && <LoadingSpinner />}
            {!isLoading && <SearchBar submitSearch={onSubmit} />}
          </div>
        }
        {forecast && <Forecast forecast={forecast}/>}
      </Fragment>
    </main>
  )
}

export default Page
