import { baseApi } from "@/redux/api/baseApi";

const productsApi = baseApi.injectEndpoints({
    endpoints:(builder) =>({
        createProduct:builder.mutation({
            query:(productData)=>({
                url:'/products',
                method:'POST',
                body:productData
            })
        }),
        getAllProduct:builder.query({
            query:()=>({
                url:'/products',
                method:'GET'
            })

        })
    })
})


export const {
    useCreateProductMutation,
    useGetAllProductQuery,
} = productsApi;