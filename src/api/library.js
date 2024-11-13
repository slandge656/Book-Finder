import axios from "axios";

const BASE_URL = "https://openlibrary.org/search.json";

export const fetchBooks = async (title) => {
  try {
    const response = await axios.get(`${BASE_URL}?title=${title}`);
    return response.data; // Return the response data (usually { docs: [...] })
  } catch (error) {
    console.error("Error fetching books:", error);
    return { docs: [] }; // Return an empty array in case of error
  }
};
