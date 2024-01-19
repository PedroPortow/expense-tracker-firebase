import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Auth from './pages/Auth/Auth'
import ExpenseTracker from './pages/ExpenseTracker/ExpenseTracker'

function App() {

  return (
    <div className='app'>
      <Router>
        <Routes>
          <Route path='/'  element={<Auth />} />
          <Route path='/expense-tracker'  element={<ExpenseTracker />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
