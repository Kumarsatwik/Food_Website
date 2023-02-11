import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import HeadlineCard from './components/HeadlineCard';
import Category from './components/Category';
import Food from './Food';

function App() {
  return (
    <div>
      <Navbar/> 
      <Hero/>
      <HeadlineCard/>
      <Food/>  
      <Category/>   
    </div>
  );
}

export default App;
