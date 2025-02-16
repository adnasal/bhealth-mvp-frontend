import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

export const signupAPI = createApi({
    reducerPath: 'signupAPI',
    baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_BASE_URL }),
    endpoints: (build) => ({
        signupUser: build.mutation({
            query: (data) => ({
                url: `/register_user`,
                method: 'POST',
                body: data
            }),
        }),
        signupInstitute: build.mutation({
            query: (data) => ({
                url: `/register_lab`,
                method: 'POST',
                body: data
            }),
        }),
    })
})

export const { useSignupUserMutation, useSignupInstituteMutation } = signupAPI;