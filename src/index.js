import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { store } from './middleware/store';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import { loginSuccess } from './middleware/slices/userSlice';
import { jwtDecode } from 'jwt-decode';

const queryClient = new QueryClient();

// Configure the store here
const token = localStorage.getItem('token');
if (token){
  try {
    const decodedUser = jwtDecode(token);
    store.dispatch(loginSuccess(decodedUser));
    
  } catch (error) {
    console.error('Error decoding token:', error);
    
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
