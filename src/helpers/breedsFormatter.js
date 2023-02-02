export const breedsFormatter = (data) => {
    if (!data || typeof data !== 'object' || Array.isArray(data)) {
        return [];
    } 
    const breedsArray = [];

    const breeds = Object.entries(data)

    breeds.map((element) => {
        const JSON = {
            breed: element[0]
        }
        if (element[1].length > 0) {
            JSON.subBreeds = element[1]
        }

        breedsArray.push(JSON)
    })

    return breedsArray;
}

