import api from './api';

const noteApi = api.injectEndpoints({
    endpoints: (builder) => ({
        getNotes: builder.query({
            query: () => "/notes",
            providesTags: ["Notes"],
        }),
        getNote: builder.query({
            query: (id) => `/notes/${id}`,
            providesTags: ["Note"],
        }),
        createNote: builder.mutation({
            query: (note) => ({
                url: `/notes`,
                method: "POST",
                body: note,
            }),
            invalidatesTags: ["Notes"],
        }),
        editNote: builder.mutation({
            query: (note) => ({
                url: `/notes/${id}`,
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