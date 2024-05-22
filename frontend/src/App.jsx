import './App.css'
import Header from './components/Header'
import Post from './components/Post'
import { Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import IndexPage from './Pages/IndexPage';
import LogInPage from './Pages/LogInPage';
import RegisterPage from './Pages/RegisterPage';
import { UserContextProvider } from './context/UserContext';
import CreatePost from './Pages/CreatePost';
import PostPage from './Pages/PostPage';
import EditPost from './Pages/EditPost';

function App() {

  return (

    <UserContextProvider>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<IndexPage />} />
          <Route path='login' element={<LogInPage />} />
          <Route path='register' element={<RegisterPage />} />
          <Route path='create' element={<CreatePost />} />
          <Route path='post/:id' element={<PostPage />} />
          <Route path='edit/:id' element={<EditPost />} />
        </Route>
      </Routes>
    </UserContextProvider>
  )
}

export default App