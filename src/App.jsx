import { useState } from 'react';
import './App.css';
import Confetti from 'react-confetti'

const getRandomImageUrl = () => {
  const width = 400;
  const height = 400;
  return `https://picsum.photos/${width}/${height}?random=${Math.random()}`
}

function App() {
  const [imageUrls, setImageUrls] = useState([
    getRandomImageUrl(),
    getRandomImageUrl()
  ]);
  const [confetti, setConfetti] = useState(false);

  const handleRefresh = () =>{
    setImageUrls([
      getRandomImageUrl(),
      getRandomImageUrl()
    ]);
    setConfetti(true);
    setTimeout(() => setConfetti(false), 5000)
  }

  return (
    <div className="App">
      <h1>Creativity Spark</h1>
      <div className="image-container">
      <img src={imageUrls[0]} alt = "Random 1" className='images'/>
      <div className="button-container">
      {confetti && <Confetti className='confetti' />}
      <button className="refresh-button" onClick={handleRefresh}>
      <span>🗲</span>
      </button>
    </div>
      <img src={imageUrls[1]} alt = 'Random 2' className='images'/>
      </div>

    </div>
  );
}

export default App;
