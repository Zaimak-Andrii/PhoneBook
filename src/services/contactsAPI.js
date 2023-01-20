import { api } from './api';

export const contactsAPI = api.injectEndpoints({
  endpoints: build => ({
    getContacts: build.query({
      query: () => ({ url: 'contacts' }),
      providesTags: (result = []) => [
        ...result.map(({ id }) => ({ type: 'Contacts', id })),
        { type: 'Contacts', id: 'LIST' },
      ],
    }),
    addContact: build.mutation({
      query: contact => {
        return {
          url: 'contacts',
          method: 'POST',
          body: contact,
        };
      },
      invalidatesTags: (_result, error) =>
        error?.status === 401 ? [] : [{ type: 'Contacts', id: 'LIST' }],
    }),
    deleteContact: build.mutation({
      query: contactId => ({
        url: `contacts/${contactId}`,
        method: 'DELETE',
      }),
      invalidatesTags: (_result, error, id) =>
        error?.status === 401 ? [] : [{ type: 'Contacts', id }],
    }),
    updateContact: build.mutation({
      query: ({ id, ...contact }) => ({
        url: `contacts/${id}`,
        method: 'PATCH',
        body: contact,
      }),
      invalidatesTags: (_result, error, { id }) =>
        error?.status === 401 ? [] : [{ type: 'Contacts', id }],
    }),
  }),
});

export const {
  useGetContactsQuery,
  useAddContactMutation,
  useDeleteContactMutation,
  useUpdateContactMutation,
} = contactsAPI;

export const {
  endpoints: { getContacts, addContact, deleteContact, updateContact },
} = contactsAPI;
