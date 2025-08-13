import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export type User = {
    id: string;
    name: string;
};
const API_URL = "http://localhost:3001";

export const usersApi = createApi({
    //api'ye benzersiz bir id string veriyoruz
    reducerPath: "usersApi",
    //istek geldiginde ne yapılacaksa onu burada yönetiyoruz
    //fetchbasequery aslında fetch(apı_url)
    baseQuery : fetchBaseQuery({baseUrl: API_URL}),
    //Api içindeki tagler burada belirtilir
    //["Users","Posts","Todos","Products","Credits"]
    tagTypes: ["Users"],
    //endpoint listesi veriyoruz
    endpoints: (builder) => ({
        getUsers : builder.query<User[], void>({
           query: () => "/users",
           providesTags : ["Users"]
        }),
        addUser: builder.mutation<User, string>({
            query : (name) =>({
                url:"/users",
                method:"POST",
                body:{name}
            }),
            /* 
             Cache id vermek için providesTags kullanıyoruz
             Aynı zamanda ürün listesi de dönseydi
             ["Users", "Products"]
            */
            invalidatesTags : ["Users"] //bu veri artık eskidi, güncelle
        })
    })
})

export const {useGetUsersQuery, useAddUserMutation} = usersApi;