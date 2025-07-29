import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Clients from './pages/Clients';
import Calendar from './pages/Calendar';
import JobBoard from './pages/JobBoard';

export default function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/clients">Clients</Link> |{' '}
        <Link to="/calendar">Calendar</Link> |{' '}
        <Link to="/jobs">Job Board</Link>
      </nav>
      <Routes>
        <Route path="/clients" element={<Clients />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/jobs" element={<JobBoard />} />
        <Route path="/" element={<Clients />} />
      </Routes>
    </BrowserRouter>
  );
}
