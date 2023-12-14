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
            invalidatesTags: ["Notes", "FavoritePlants"],
        }),
        editNote: builder.mutation({
            query: ({ id, data }) => ({
                url: `/notes/${id}`,
                method: "PUT",
                body: data,
            }),
            invalidatesTags: ["Note", "Notes", "FavoritePlants"],
        }),
        deleteNote: builder.mutation({
            query: (id) => ({
                url: `/notes/${id}`,
                method: "DELETE",
            }),
            invalidatesTags: ["Note", "Notes", "FavoritePlants"]
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