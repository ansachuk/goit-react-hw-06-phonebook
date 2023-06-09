import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";

import { setFromLS } from "redux/contactsSlice";

import ContactForm from "../ContactForm/ContactForm";
import Filter from "../Filter/Filter";
import ContactList from "../ContactList/ContactList";

import css from "./App.module.css";

const LOCAL_KEY = "contacts";

export function App() {
	const contacts = useSelector(({ contacts }) => contacts);
	const disp = useDispatch();

	let first = useRef(1);

	useEffect(() => {
		const localContacts = JSON.parse(localStorage.getItem(LOCAL_KEY));
		if (localContacts && first.current === 1) {
			disp(setFromLS(localContacts));

			first.current += 1;
			console.log("first");
		}
	}, [disp]);

	useEffect(() => {
		localStorage.setItem(LOCAL_KEY, JSON.stringify(contacts));
	}, [contacts]);

	return (
		<>
			<h1 className={css.title}>Phone Book</h1>

			<ContactForm />
			<h2 className={css.subtitle}>Contacts</h2>

			<Filter />
			{contacts.length ? <ContactList /> : <p className={css.message}>You have no contacts yet!</p>}
		</>
	);
}
