

class MarvelService {
    getResource = async (url) => {
        let res = await fetch(url);

        if (!res.ok) {
            throw new Error(`Could not fetch ${url}, status: ${res.status}`);
        }

        return await res.json();
    }

    getAllCharacters = () => {
        return this.getResource('https://gateway.marvel.com:443/v1/public/characters?limit=9&offset=210&apikey=ad8f96ee85b53c4e1b11f16cf3522538');
    }
    getCharacters = (id) => {
        return this.getResource(`https://gateway.marvel.com:443/v1/public/characters/${id}?&apikey=ad8f96ee85b53c4e1b11f16cf3522538`);
    }
}

export default MarvelService;