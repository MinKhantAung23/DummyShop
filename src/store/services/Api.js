/* eslint-disable no-unused-vars */
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const Api = createApi({
    reducerPath: "productApi",
    baseQuery: fetchBaseQuery({
        baseUrl: import.meta.env.VITE_API_URL
    }),
    endpoints: (builder) => ({}),
})