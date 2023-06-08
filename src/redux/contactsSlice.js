import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const contactsSlice = createSlice({
	name: "contacts",
	initialState,
	reducers: {
		addContact: (state, action) => state,

		removeContact: (state, action) => state,
	},
});

export const { addContact, removeContact } = contactsSlice.actions;

export default contactsSlice.reducer;
