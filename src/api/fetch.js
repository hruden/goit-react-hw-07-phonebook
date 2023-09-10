import axios from "axios";
const BASE_URL = "https://64fc2bd0605a026163ae3d19.mockapi.io/";

export const fetchContacts  = async () => {
    const { data } = await axios.get(`${BASE_URL}/contacts`);
    return data;
  };

  export const addContact  = async (contact) => {
    const { data } = await axios.post(`${BASE_URL}/contacts`, contact);
    return data;
  };
  
  export const deleteContact  = async (contactId) => {
    const { data } = await axios.delete(`${BASE_URL}/contacts/${contactId}`);
    return data;
  };
// import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// export const contactsApi = createApi({
//   reducerPath: "contactsApi",
//   baseQuery: fetchBaseQuery({
//     baseUrl: "https://64fc2bd0605a026163ae3d19.mockapi.io",
//   }),
//   endpoints: (builder) => ({
//     fetchContacts: builder.query({
//       query: () => `/contacts`,
//       providesTags: ["contacts"],
//     }),

//     addContact: builder.mutation({
//       query: (body) => ({
//         url: "/contacts",
//         method: "POST",
//         body,
//       }),
//       invalidatesTags: ["contacts"],
//     }),
//     deleteContact: builder.mutation({
//       query: (id) => ({
//         url: `/contacts/${id}`,
//         method: "DELETE",
//         id,
//       }),
//       invalidatesTags: ["contacts"],
//     }),
//   }),
// });

// export const {useFetchContactsQuery, useAddContactMutation, useDeleteContactMutation} = contactsApi