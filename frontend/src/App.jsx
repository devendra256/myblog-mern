import './App.css'
import Header from './components/Header'
import Post from './components/Post'
import {Routes, Route} from 'react-router-dom';
import Layout from './Layout';
import IndexPage from './Pages/IndexPage';
import LogInPage from './Pages/LogInPage';
import RegisterPage from './Pages/RegisterPage';

function App() {

  return (

    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<IndexPage />} />
        <Route path='login' element={<LogInPage />} />
        <Route path='register' element={<RegisterPage />} />
      </Route>
    </Routes>
  )
}

export default App