// import { logOut, setUser } from "@/redux/features/auth/authSlice";
import { RootState } from "@/redux/store";
import { BaseQueryApi, DefinitionType, createApi, FetchArgs, fetchBaseQuery, BaseQueryFn } from "@reduxjs/toolkit/query/react";
import { logOut, setUser } from "../rtkQfeatures/auth/authSlice";


// http://localhost:5000 


const baseQuery = fetchBaseQuery({
    baseUrl: 'https://code-commando.com/api/v1',
    // credentials: 'include',
    // prepareHeaders: (headers, { getState }) => {
    //     const token = (getState() as RootState).auth.token;
    //     if (token) {
    //         headers.set('authorization', `${token}`)
    //         return headers;
    //     }
    // },

})

const baseQueryWithRefreshToken: BaseQueryFn<FetchArgs, BaseQueryApi, DefinitionType> = async (args, api, extraOptions): Promise<any> => {
    let result = await baseQuery(args, api, extraOptions);
    console.log(result);
    if ((result as any)?.error?.status === 500) {
        const res = await fetch('https://code-commando.com/api/v1/auth/refresh', {
            method: 'POST',
            credentials: 'include'
        });

        const data = await res.json();

        if (data.success) {
            const user = (api.getState() as RootState).auth.user;
            api.dispatch(setUser({
                user,
                token: data.data.token
            }));

            result = await baseQuery(args, api, extraOptions);

        } else {
            api.dispatch(logOut())
        }

    }
    return result;

}


export const baseApi = createApi({
    reducerPath: 'baseApi',
    baseQuery: baseQueryWithRefreshToken,
    endpoints: () => ({})
})