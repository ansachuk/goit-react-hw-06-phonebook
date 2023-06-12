import { createSlice, nanoid } from "@reduxjs/toolkit";

import { Notify } from "notiflix";

const initialState = [
	{ name: "an", number: "380123123123", id: 1 },
	{ name: "na", number: "380123123123", id: 2 },
];

const contactsSlice = createSlice({
	name: "contacts",
	initialState,
	reducers: {
		addContact: {
			reducer(contacts, { payload }) {
				// console.log("contacts", contacts);
				// console.log("payload", payload);
				Notify.success("Contact has added!");
				return [...contacts, payload];
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

		removeContact: (contacts, { payload }) => {
			Notify.failure("Contact deleted!");
			return contacts.filter(contact => contact.id !== payload);
		},
	},
});

export const { addContact, removeContact, setFromLS } = contactsSlice.actions;

export default contactsSlice.reducer;
