import { createSlice, nanoid } from "@reduxjs/toolkit";

import { Notify } from "notiflix";

const initialState = [];

const contactsSlice = createSlice({
	name: "contacts",
	initialState,
	reducers: {
		addContact: {
			reducer(contacts, { payload }) {
				contacts.push(payload);
				Notify.success("Contact has added!");
			},
			prepare({ name, number }) {
				return {
					payload: {
						name,
						number,
						id: nanoid(),
					},
				};
			},
		},

		//! timely method
		setFromLS: (contacts, { payload }) => (contacts = payload),

		removeContact: (contacts, { payload }) => {
			Notify.failure("Contact deleted!");
			return contacts.filter(contact => contact.id !== payload);
		},
	},
});

export const { addContact, removeContact, setFromLS } = contactsSlice.actions;

export default contactsSlice.reducer;
