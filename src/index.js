import ReactDOM from 'react-dom/client';
import 'index.css';
import App from 'App';
import authReducer from 'state';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    REGISTER,
    PAUSE,
    PERSIST,
    PURGE
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { PersistGate } from 'redux-persist/integration/react';

const persistConfig = { key: 'root', storage, version: 1 };

const persistedReducer = persistReducer(persistConfig, authReducer);

const store = configureStore({
    reducer: persistedReducer,
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            // middleware serializableCheck đc sử dụng để đảm bảo rằng bất kì action nào đc
            // dispatch đến store đều đc tuần tự hóa (tức là có thể đc convert thành plain object)
            // khi truyền các ignoreActions vào, middleware serializableCheck có thể đảm bảo rằng
            // chỉ những action đc ta định nghĩa mới đc tuần tự 1 cách chính xác
            serializableCheck: {
                ignoreActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
            }
        })
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistStore(store)}>
            <App />
        </PersistGate>
    </Provider>
);
