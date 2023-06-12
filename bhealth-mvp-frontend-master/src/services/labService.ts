import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

export const labAPI: any = createApi({
    reducerPath: 'labAPI',
    baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_BASE_URL }),
    endpoints: (build) => ({
        getLabs: build.query({
            query: (data) => {
                return { url: `/labs`, }
            },
            transformResponse: (response: any) => {
                return response?.results
            },
        }),
        getLab: build.query({
            query: (data) => {
                return {
                    url: `/lab/`,
                    params: {
                        pk: data
                    }
                }
            },
            transformResponse: (response: any) => response,
        }),
        getServices: build.query({
            query: (data) => {
                return {
                    url: `/lab_services`,
                    params: {
                        lab: data
                    }
                }
            },
            transformResponse: (response: any) => response.results,
        }),
    })
})

export const { useGetLabsQuery, useGetLabQuery, useGetServicesQuery } = labAPI;