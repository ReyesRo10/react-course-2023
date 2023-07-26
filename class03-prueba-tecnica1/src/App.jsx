import './App.css';
import { useCatImage } from './hooks/useCatImage.js';
import { useCatFact } from './hooks/useCatFact.js';

export function App() {
  const { fact, refreshFact } = useCatFact();
  const { imageURL } = useCatImage({ fact });

  const handleCLick = async () => {
    refreshFact();
  };

  return (
    <main>
      <h1>App de gatitos</h1>
      <button onClick={handleCLick}>Get new fact</button>
      {fact && <p>{fact}</p>}
      {imageURL && (
        <img
          src={imageURL}
          alt={`Image extracted using the first rhee words for ${fact}`}
        />
      )}
    </main>
  );
}
