import axios from "axios"

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
})

api.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    const token = localStorage.getItem("auth_token")
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error)
  }
)

api.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    if (error.response.status == 401) {
      localStorage.clear()
      window.location.href = "/login"
    }
    return Promise.reject(error)
  }
)

export const toFormData = (object: { [x: string]: string | Blob }) => {
  const formData = new FormData()
  Object.keys(object).forEach((key) => {
    formData.append(key, object[key])
  })
  return formData
}

export default api
