import { useEffect, useState } from 'react';

const CAT_PREFIX_IMAGE_URL = 'https://cataas.com';

export function useCatImage({ fact }) {
  const [imageURL, setImageUrl] = useState();

  //para recuperar la imagen cada vez que tenemos una cita nueva
  useEffect(() => {
    if (!fact) return;

    const firstWord = fact.split(' ', 1);

    fetch(
      `https://cataas.com/cat/says/${firstWord}?size=50&color=red&json=true`
    )
      .then((res) => res.json())
      .then((data) => {
        const { url } = data;
        setImageUrl(url);
      });
  }, [fact]);
  return { imageURL: `${CAT_PREFIX_IMAGE_URL}${imageURL}` };
}
