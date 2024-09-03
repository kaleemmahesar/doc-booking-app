const {default : axios }  = require('axios')

const axiosClient = axios.create({
    baseURL: "http://localhost/wp-react/server"
})

const getProducts = () => axiosClient.get(`/wp-json/wp/v2/products`).then(res => {
    return res.data
})

const getCategories = () => axiosClient.get(`/wp-json/wp/v2/products_category`)

const getSlides = () => axiosClient.get(`/wp-json/wp/v2/slider`).then(res => {
    return res.data
})

export default {
    getProducts,
    getCategories,
    getSlides
}