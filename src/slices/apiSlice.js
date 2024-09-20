import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { BASE_URL } from '../constants'

export const API_KEY = process.env.REACT_APP_API_KEY
export const API_TOKEN = process.env.REACT_APP_API_TOKEN

const baseQuery = fetchBaseQuery({
  baseUrl: BASE_URL,
  prepareHeaders: (headers) => {
    headers.set('Authorization', `Bearer ${API_TOKEN}`)
    headers.set('Content-Type', 'application/json')
    return headers
  },
})

export const apiSlice = createApi({
  baseQuery,
  tagTypes: ['Movies'],
  endpoints: (builder) => ({}),
})
