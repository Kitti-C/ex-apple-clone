/* eslint-disable @typescript-eslint/no-explicit-any */
const axiosHelper = async (promiseAPI: any) => {
  return promiseAPI
    .then((response: any) => {
      return { res: response, err: null }
    })
    .catch((error: any) => {
      if (error.response && typeof error.response.data === 'object') {
        return { res: error.response, err: error }
      }

      return { res: null, err: error }
    })
}

export default axiosHelper
