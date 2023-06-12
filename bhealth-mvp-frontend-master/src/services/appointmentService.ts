import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

export const appointmentAPI = createApi({
    reducerPath: 'appointmentAPI',
    baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_BASE_URL }),
    endpoints: (build) => ({
        addAppointment: build.mutation({
            query: (data) => {
                return ({
                    url: `/add_appointment`,
                    method: 'POST',
                    body: data
                })
            },
        }),
        updateAppointment: build.mutation({
            query: (data: any) => {
                return ({
                    url: `/update_appointment?pk=${data?.lab_appointment}`,
                    method: 'PUT',
                    body: data
                })
            },
        }),
        cancelAppointment: build.mutation({
            query: (data) => ({
                url: `/cancel_appointment`,
                params: {
                    pk: data
                },
                method: 'PUT',
                // body: data
            }),
        }),
        getUpcomingAppointmentsUser: build.query({
            query: (data) => {
                return {
                    url: `/upcoming_appointments_user`,
                    params: {
                        patient: data
                    }
                }
            },
            transformResponse: (response: any) => {
                return response?.results
            },
        }),
        getPastAppointmentsUser: build.query({
            query: (data) => {
                return {
                    url: `/past_appointments_user`,
                    params: {
                        patient: data
                    }
                }
            },
            transformResponse: (response: any) => {
                return response?.results
            },
        }),
        getUpcomingAppointmentsLabs: build.query({
            query: (data) => {
                return {
                    url: `/u_appointments`,
                    params: {
                        lab: data
                    }
                }
            },
            transformResponse: (response: any) => {
                return response
            },
        }),
        getRequests: build.query({
            query: (data) => {
                return {
                    url: `/requests`,
                    params: {
                        lab_appointment: data
                    }
                }
            },
            transformResponse: (response: any) => {
                return response?.results
            },
        }),
        getNotification: build.query({
            query: (data) => {
                return {
                    url: `/notifications`,
                    params: {
                        patient: data?.patient && data?.patient,
                        lab: data?.lab && data?.lab
                    }
                }
            },
            transformResponse: (response: any) => {
                return response?.results
            },
        }),
        confirmNotification: build.mutation({
            query: (data) => ({
                url: `/confirm_notification`,
                params: {
                    pk: data
                },
                method: 'PUT',
                // body: data
            }),
        }),
    })
})

export const {
    useAddAppointmentMutation,
    useUpdateAppointmentMutation,
    useCancelAppointmentMutation,
    useGetUpcomingAppointmentsUserQuery,
    useGetPastAppointmentsUserQuery,
    useGetUpcomingAppointmentsLabsQuery,
    useGetRequestsQuery,
    useGetNotificationQuery,
    useConfirmNotificationMutation
} = appointmentAPI;