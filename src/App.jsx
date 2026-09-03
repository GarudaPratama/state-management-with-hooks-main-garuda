import { Outlet } from 'react-router-dom';
import { ReviewProvider } from './context/ReviewContext';

export default function App() {
  return (
    <ReviewProvider>
      <Outlet />
    </ReviewProvider>
  );
}