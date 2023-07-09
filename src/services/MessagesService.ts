import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/dist/query/react";
import {IMessage} from "../models/IMessage";

export const messagesAPI = createApi({
    reducerPath: "messagesApi",
    baseQuery: fetchBaseQuery({baseUrl: "http://localhost:3030"}),
    tagTypes: ["Post"],
    endpoints: (build) => ({
        fetchAllMessages: build.query<IMessage[], string>({
            query: () => ({
                url: "/messages"
            }),
            transformResponse: (
                response: IMessage[],
                meta,
                arg
            ) => arg.length > 0 ? response.filter((message: IMessage) => message.message.includes(arg)) : response,
            providesTags: ["Post"]
        }),
        fetchAuthorsMessages: build.query<IMessage[], string>({
            query: () => ({
                url: "/messages"
            }),
            transformResponse: (
                response: IMessage[],
                meta,
                arg
            ) => response.filter((message: IMessage) => message.author === arg),
            providesTags: ["Post"]
        }),
        createMessage: build.mutation<IMessage, IMessage>({
            query: (message) => ({
                url: "/messages",
                method: "POST",
                body: message
            }),
            invalidatesTags: ["Post"]
        })
    })
})