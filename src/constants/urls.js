const baseURL = process.env.REACT_APP_API

const characters = '/character'

const urls = {
    characters: {
        base: characters,
        byId: (id) => `${characters}/${id}`
    }
}
export {baseURL, urls}