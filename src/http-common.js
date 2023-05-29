import axios from "axios";

export default axios.create({
  // baseURL: process.env.REACT_APP_API_BASE_URL || 'http://localhost:8080/api',
  baseURL: 'https://backend-notes-65wj762j5a-uc.a.run.app/api',
  headers: {
    "Content-type": "application/json"
  }
  
});