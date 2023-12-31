import { Route, Routes } from 'react-router-dom';
import Layout from './Layout';
import IndexPage from './pages/IndexPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import AccountPage from './pages/AccountPage';
import axios from 'axios';
import { UserContextProvider } from './contexts/UserContext';

if (window.location.host.includes('localhost')) {
  axios.defaults.baseURL = 'http://localhost:4000';
}
if (window.location.host.includes('127.0.0.1')) {
  axios.defaults.baseURL = 'http://127.0.0.1:4000';
}

axios.defaults.withCredentials = true;

function App() {
  return (
    <UserContextProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<IndexPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/account" element={<AccountPage />} />
          <Route
            path="/account/:subpage?"
            element={<AccountPage />}
          />
          <Route
            path="/account/:subpage/:action"
            element={<AccountPage />}
          />
        </Route>
      </Routes>
    </UserContextProvider>
  );
}

export default App;
