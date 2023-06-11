import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import contactsReducer from "./contactsSlice";
import filterReducer from "./filterSlice";

const persistConfig = {
	key: "contacts",
	storage,
	// blacklist: ["filter"],
};

const reducer = combineReducers({
	contacts: contactsReducer,
	filter: filterReducer,
});

const persistedReducer = persistReducer(persistConfig, reducer);

const store = configureStore({
	reducer: persistedReducer,
});

export const persistor = persistStore(store);
export default store;
