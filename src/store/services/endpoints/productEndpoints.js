import { Api } from "../Api";

const productEndpoints = Api.injectEndpoints({
    endpoints: (builder) => ({
        products: builder.query({
            query: (page = 1, limit = 20) => `/products?limit=${limit}&skip=${(page - 1) * limit}`,
            providesTags: ['Products'],
            keepUnusedDataFor: 180,
        }),
        getSingleProduct: builder.query({
            query: (id) => `/products/${id}`,
            providesTags: ['Products'],
            keepUnusedDataFor: 180,
        }),
        searchProducts: builder.query({
            query: (search) => `/products/search?q=${search}`,
            providesTags: ['Products'],
            keepUnusedDataFor: 180,
        })
    })
})
export const { useProductsQuery, useGetSingleProductQuery, useSearchProductsQuery } = productEndpoints;