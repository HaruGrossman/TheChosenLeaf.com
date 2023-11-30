import api from './api';

const noteApi = api.injectEndpoints({
    endpoints: (builder) => ({
        getNotes: builder.query({
            query: () => "/notes",
            providesTags: ["Notes"],
        }),
        getNote: builder.query({
            query: (id) => `/notes/${id}`,
            providesTags: ["Notes"],
        }),
        createNote: builder.mutation({
            query: (note) => ({
                url: "/notes",
                method: "POST",
                body: note,
            }),
            invalidatesTags: ["Notes"],
        }),
        editNote: builder.mutation({
            query: (note) => ({
                url: `/notes/${note.id}`,
                method: "PUT",
                body: note,
            }),
            invalidatesTags: ["Notes"],
        }),
        deleteNote: builder.mutation({
            query: (id) => ({
                url: `/notes/${id}`,
                method: "DELETE",
            }),
            invalidatesTags: ["Notes"]
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