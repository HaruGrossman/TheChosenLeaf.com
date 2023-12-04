import api from './api';

const noteApi = api.injectEndpoints({
    endpoints: (builder) => ({
        getNotes: builder.query({
            query: () => `/notes`,
            // transformResponse: (response) => response.note,
            providesTags: ["Notes"],
        }),
        getNote: builder.query({
            query: (id) => `/notes/${id}`,
            transformResponse: (response) => response.note,
            providesTags: ["Note"],
        }),
        createNote: builder.mutation({
            query: (data) => ({
                url: `/notes/create`,
                method: "POST",
                body: data,
            }),
            invalidatesTags: ["Notes"],
        }),
        editNote: builder.mutation({
            query: ({id, ...note}) => ({
                url: `/notes/update/${id}`,
                method: "PUT",
                body: note,
            }),
            invalidatesTags: ["Note"],
        }),
        deleteNote: builder.mutation({
            query: (id) => ({
                url: `/notes/${id}`,
                method: "DELETE",
            }),
            invalidatesTags: ["Note"]
        }),
    }),
});
export const { 
    useGetNotesQuery, 
    useGetNoteQuery, 
    useCreateNoteMutation, 
    useEditNoteMutation, 
    useDeleteNoteMutation,
 } = noteApi