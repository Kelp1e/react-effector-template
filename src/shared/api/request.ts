import axios from "axios"

export const request = axios.create({
  baseURL: "http://localhost:31299/api/",
})
