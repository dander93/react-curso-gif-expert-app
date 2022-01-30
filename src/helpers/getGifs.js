import Proptypes from 'prop-types';

const getGifs = async (category) => {
        
    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&rating=R&api_key=FlHD2dDLSvpVxxGvtgaBd0BmBnAvxZlK`;
    const response = await fetch(url);

    const {data} = await response.json();

    const gifs = data.map(img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        };
    });

    return gifs;
};

export {
    getGifs as default
};

getGifs.propTypes = {
    category: Proptypes.string.isRequired
};