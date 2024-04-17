import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'; // Import useParams for accessing character ID
import axios from 'axios'; // Import axios for fetching data
import styles from './CharacterDetails.module.scss';

const CharacterDetails = () => {
  const { id } = useParams(); // Extract character ID from URL parameter
  const [character, setCharacter] = useState(null);

  useEffect(() => {
    const fetchCharacter = async () => {
      const response = await axios.get(`https://rickandmortyapi.com/api/character/${id}`);
      setCharacter(response.data);
    };

    fetchCharacter();
  }, [id]); // Re-fetch data when id changes

  return (
    <div className={styles.characterDetails}>
      {character ? (
        <>
          {/* Display character details here */}
          <img src={character.image} alt={character.name} style={{ objectFit: 'cover', width: '100%' }} />
          <h2>{character.name}</h2>
          <p>Status: {character.status}</p>
          <p>Species: {character.species}</p>
          <p>Gender: {character.gender}</p>
          <p>Origin: {character.origin.name}</p>
          <p>Location: {character.location.name}</p>
          {/* Add more details as needed (episodes, etc.) */}
        </>
      ) : (
        <p>Loading character details...</p>
      )}
    </div>
  );
};

export default CharacterDetails;
