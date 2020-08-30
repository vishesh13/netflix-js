const API_KEY = '1492e99cf6b586115b58102846d051de';
const BASE_URL = 'https://api.themoviedb.org/3';

export const requests = {
    'Netflix Originals': `${BASE_URL}/discover/tv?api_key=${API_KEY}&with_networks=213`,
    'Trending Now': `${BASE_URL}/trending/all/week?api_key=${API_KEY}&language=en-US`,
    'Top Rated': `${BASE_URL}/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    'Action Movies': `${BASE_URL}/discover/tv?api_key=${API_KEY}&with_genres=28`,
    'Comedy Movies': `${BASE_URL}/discover/tv?api_key=${API_KEY}&with_genres=35`,
    'Horror Movies': `${BASE_URL}/discover/tv?api_key=${API_KEY}&with_genres=27`,
    'Romance': `${BASE_URL}/discover/tv?api_key=${API_KEY}&with_genres=10749`,
    'Documentaries': `${BASE_URL}/discover/tv?api_key=${API_KEY}&with_genres=99`,
}

export const categories = ['Netflix Originals', 'Trending Now', 'Top Rated', 'Action Movies', 'Comedy Movies', 'Horror Movies', 'Romance', 'Documentaries'];