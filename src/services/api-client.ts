import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: 'f0775f8a36134e60b68b39158e44e349'
    }
})


