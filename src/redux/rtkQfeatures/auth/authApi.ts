import { baseApi } from "@/redux/api/baseApi";



const authApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        login: builder.mutation({
            query: (data) => {
                console.log(data);
                return {
                    url: '/auth/login',
                    method: 'POST',
                    body: data
                };
            }
        }),

       
    })
})

export const { useLoginMutation} = authApi;