import './App.css';
import { AnimatePresence} from 'framer-motion';
import Background from './Components/Background/Background';
import NameAnimation from './Components/NameAnimation/NameAnimation';

function App() {
  return (
    <>
        <AnimatePresence>
        <Background />
        <svg width={1000} height={1000}>
        <NameAnimation />
        </svg>
        </AnimatePresence>
    </>
  );
}

export default App;
