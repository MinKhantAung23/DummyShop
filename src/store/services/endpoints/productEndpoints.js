import { Api } from "../Api";

const productEndpoints = Api.injectEndpoints({
    endpoints: (builder) => ({
        products: builder.query({
            query: ({ page = 1, limit = 20 }) => {
                const skip = (page - 1) * limit;
                return `/products?limit=${limit}&skip=${skip}`;
            },
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