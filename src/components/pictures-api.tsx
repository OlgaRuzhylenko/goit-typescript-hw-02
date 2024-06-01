import axios from "axios";

const API_KEY = "eVhb8v0RIGbiD5NG5gL0VhsC7iWkb5wDX-_meFjojB0";

axios.defaults.baseURL = 'https://api.unsplash.com/search'
export interface ImageResult {
    id: string;
  urls: {
    small: string;
    regular: string;
  };
  alt_description: string;
  }
interface FetchImgParams {
    searchQuery: string;
    currentPage: number;
  }

export const fetchImg = async ({searchQuery, currentPage}:FetchImgParams): Promise<ImageResult[]> => {
    const response = await axios.get('photos/', {
        params: {
            client_id: API_KEY,
            query: searchQuery,
            page: currentPage,
            per_page: 12,
        }
    })
    return response.data.results;
}

