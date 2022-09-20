import axiosHelper from './axiosHelper'
import httpClient from './httpClient'

const fetchCategories = async () => {
  const { res, err } = await axiosHelper(httpClient.get('/getCategories'))

  const data = await res.data.categories
  const categories: Category[] = data || null

  return categories
}

const fetchCategories2 = async () => {
  const { res, err } = await axiosHelper(httpClient.get('/getCategories'))
}

export { fetchCategories, fetchCategories2 }
