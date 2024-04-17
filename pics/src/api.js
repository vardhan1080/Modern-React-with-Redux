import axios from 'axios';

const searchImages = async(term) => {
    const response = await axios.get('https://api.unsplash.com/search/photos', {
        headers: {
            Authorization:'Client-ID Ol3uk4cY6zdFofkaW7M6Z2beuQlUHHVzR728LjrjP5A'
        },
        params: {
            query:term,
        }
    });
    return response.data.results;
};

export default searchImages;