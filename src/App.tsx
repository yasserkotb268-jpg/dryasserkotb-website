import { Routes, Route } from 'react-router'
import Home from './pages/Home'
import LeadershipMerit from './pages/LeadershipMerit'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/leadership-merit" element={<LeadershipMerit />} />
    </Routes>
  )
}
