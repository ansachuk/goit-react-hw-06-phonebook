import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import contactsReducer from "./contactsSlice";
import filterReducer from "./filterSlice";

const persistConfig = {
	key: "contacts",
	storage,
};

const persistedContactsReducer = persistReducer(persistConfig, contactsReducer);

const store = configureStore({
	contacts: persistedContactsReducer,
	filter: filterReducer,
});

export const persistor = persistStore(store);
export default store;
