import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

export const authAPI = createApi({
    reducerPath: 'authAPI',
    baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_BASE_URL }),
    endpoints: (build) => ({
        loginUser: build.mutation({
            query: (data) => ({
                url: `/login_user`,
                method: 'POST',
                body: data
            }),
        }),
        getProfile: build.query({
            query: (data) => ({
                url: `/profile`,
                params: {
                    pk: data
                },
                method: 'GET'
            }),
            transformResponse: (response: any) => {
                return response
            },
        }),
    })
})


export const { useLoginUserMutation, useGetProfileQuery } = authAPI;