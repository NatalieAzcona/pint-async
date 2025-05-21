const API_KEY = 'svP-noFXjyjFAU7bc5s9GOrWnrOyw6wQigVF9qUyFOg'

const fetchApi = async (query = 'personas') => {
    const url = "https://api.unsplash.com/search/photos/";
      
    try {
        const response = await fetch(`${url}?query=${query}&per_page=20&client_id=${API_KEY}`);
        const res = await response.json();
        return res.results;
      } catch (error) {
        console.log('No se encuentra la imagen', error);
      }
};
    export default fetchApi;
