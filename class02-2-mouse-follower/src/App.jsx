import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [enabled, setEnabled] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleButton = () => {
    setEnabled(!enabled);
  };
  useEffect(() => {
    console.log('efect', { enabled });

    const handleMove = (event) => {
      const { clientX, clientY } = event;
      console.log('handleMove', { clientX, clientY });
      setPosition({ x: clientX, y: clientY });
    };
    if (enabled) {
      window.addEventListener('pointermove', handleMove);
    }
    //cleanup
    //cuando el componente se desmonta
    return () => {
      window.removeEventListener('pointermove', handleMove);
    };
  }, [enabled]);
  return (
    <main>
      <div
        style={{
          position: 'absolute',
          backgroundColor: '#00f',
          borderRadius: '50%',
          opacity: 0.8,
          pointerEvents: 'none',
          left: -20,
          top: -20,
          width: 40,
          height: 40,
          transform: `translate(${position.x}px, ${position.y}px)`,
        }}
      ></div>
      <button onClick={handleButton}>
        {enabled ? 'Desactivar' : 'Activar'} seguir puntero
      </button>
    </main>
  );
}

export default App;
