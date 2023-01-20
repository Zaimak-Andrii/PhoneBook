import { api } from './api';

export const contactsAPI = api.injectEndpoints({
  endpoints: build => ({
    getContacts: build.query({
      query: () => ({ url: 'contacts' }),
      providesTags: (result, error, arg) =>
        result
          ? [...result.map(({ id }) => ({ type: 'Contacts', id })), 'Contacts']
          : ['Contacts'],
    }),
    addContact: build.mutation({
      query: contact => {
        return {
          url: 'contacts',
          method: 'POST',
          body: contact,
        };
      },
      invalidatesTags: ['Contacts'],
    }),
    deleteContact: build.mutation({
      query: contactId => ({
        url: `contacts/${contactId}`,
        method: 'DELETE',
      }),
      invalidatesTags: (result, error, id) => [{ type: 'Contacts', id: id }],
    }),
    updateContact: build.mutation({
      query: ({ id, ...contact }) => ({
        url: `contacts/${id}`,
        method: 'PATCH',
        body: contact,
      }),
      invalidatesTags: (result, error, { id }) => [
        { type: 'Contacts', id: id },
      ],
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
