import Navbar from './components/Navbar';
import ReviewCard from './components/ReviewCard';
import ReviewForm from './components/ReviewForm';
import { ReviewProvider } from './context/ReviewContext';

function App() {
  return (
    <div className='flex flex-col gap-10 min-h-screen pb-10'>
      <ReviewProvider>
        <Navbar />

        <main className='flex flex-col gap-6 max-w-300 mx-auto px-4 w-full'>
          <ReviewCard />
          <ReviewForm />
        </main>
      </ReviewProvider>
    </div>
  );
}

export default App;
