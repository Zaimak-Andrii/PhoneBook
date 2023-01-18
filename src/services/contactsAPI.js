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
      invalidatesTags: [{ type: 'Contacts', id: 'LIST' }],
    }),
    deleteContact: build.mutation({
      query: contactId => ({
        url: `contacts/${contactId}`,
        method: 'DELETE',
      }),
      invalidatesTags: contact => [{ type: 'Contacts', id: contact?.id }],
    }),
    updateContact: build.mutation({
      query: ({ id, ...contact }) => ({
        url: `contacts/${id}`,
        method: 'PATCH',
        body: contact,
      }),
      invalidatesTags: contact => [{ type: 'Contacts', id: contact?.id }],
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
