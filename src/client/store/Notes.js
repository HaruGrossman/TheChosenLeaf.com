import { api } from './api';

const NoteEndpoints = api.injectEndpoints({
    endpoints: (builder) => ({
        createNote: builder.query({
            query: () => "/Account/notes",
            providesTags: ["AccountNotes"],
        }),
        editNote: builder.query({
            query: () => `/Account/notes/${Id}`,
            providesTags: ["Plant"],
        }),
        deleteNote: builder.query({
            query: () => `/Account/notes/${Id}`,
            providesTags: ["DeleteNote"]
        })
    })
})
export const { useGetCreateNoteQuery, useGetEditNoteQuery, useDeleteNoteQuery } = NoteEndpoints