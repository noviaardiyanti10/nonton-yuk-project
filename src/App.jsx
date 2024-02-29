import { Route, Routes } from 'react-router-dom'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import MoviesPage from './pages/MoviesPage'
import HistoryMovie from './pages/HistoryMovie'

function App() {
  return (
    <div>
      <Routes>
        <Route path='/login' Component={LoginPage}/>
        <Route path='/register' Component={RegisterPage}/>
        <Route path='/movies' Component={MoviesPage}/>
        <Route path='movies/history' Component={HistoryMovie}/>
      </Routes>
    </div>
  )
}

export default App
