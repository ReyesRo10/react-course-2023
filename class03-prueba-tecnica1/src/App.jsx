import { useEffect, useState } from 'react';
const CAT_ENDPOINT_RANDOM_FACT = `https://catfact.ninja/fact
`;
/*const CAT_ENDPOINT_IMAGE_URL = `https://cataas.com/cat/says/${firstWord}
`;*/

export function App() {
  const [fact, setFact] = useState();
  const [imageURL, setImageUrl] = useState();
  useEffect(() => {
    fetch(CAT_ENDPOINT_RANDOM_FACT)
      .then((res) => res.json())
      .then((data) => {
        const { fact } = data;
        setFact(fact);

        const firstWord = fact.split(' ', 1);
        console.log(firstWord);

        fetch(`https://cataas.com/cat/says/${firstWord}?size=50&color=red&json=true
        `)
          .then((res) => res.json())
          .then((response) => {
            const { url } = response;
            setImageUrl(`https://cataas.com/${url}
            `);
          });
      });
  }, []);
  return (
    <main>
      <h1>App de gatitos</h1>
      {fact && <p>{fact}</p>}
      {imageURL && (
        <img
          src={imageURL}
          alt={`Image extracted using the first word for ${fact}`}
        />
      )}
    </main>
  );
}
