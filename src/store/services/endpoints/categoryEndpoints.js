import { Api } from "../Api";

const categoryEndpoints = Api.injectEndpoints({
  endpoints: (builder) => ({
    getCategory: builder.query({
      query: () => "/products/categories",
      providesTags: ["Products"],
      keepUnusedDataFor: 180,
    }),
    getCategoryList: builder.query({
      query: () => "/products/categoty-list",
      providesTags: ["Products"],
      keepUnusedDataFor: 180,
    }),
    getProductsByCategory: builder.query({
      query: ({ category, page = 1, limit = 20 }) => `products/category/${category}?limit=${limit}&skip=${(page - 1) * limit}`,
      providesTags: ["Products"],
      keepUnusedDataFor: 180,
    }),
    searchProductsByCategory: builder.query({
      query: (search, category) => `products/category/q=${search}&category=${category}`,
      providesTags: ["Products"],
      keepUnusedDataFor: 180,
    }),
  }),
});

export const {
  useGetCategoryQuery,
  useGetCategoryListQuery,
  useGetProductsByCategoryQuery,
} = categoryEndpoints;
