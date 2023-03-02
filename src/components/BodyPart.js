import React from 'react';
import { Stack, Typography } from '@mui/material';
import Icon from '../assets/icons/gym.png';

const BodyPart = ({ item, setBodyPart, bodyPart }) => (
  <Stack
    type="button"
    alignItems="center"
    justifyContent="center"
    className="bodyPart-card"
    sx={bodyPart === item ? { border: '4px solid #f8f', background: '#1fff', borderRadius: '20px', width: '270px', height: '282px', cursor: 'pointer', gap: '47px' } : { background: '#1fff', borderRadius: '20px', width: '270px', height: '282px', cursor: 'pointer', gap: '47px' }}
    onClick={() => {
      setBodyPart(item);
      window.scrollTo({ top: 900, left: 100, behavior: 'smooth' });
    }}
  >
    <img src={Icon} alt="dumbbell" style={{ width: '150px', height: '150px' }} />
    <Typography fontSize="24px" fontWeight="bold" fontFamily="Alegreya" color="#3A1212" textTransform="capitalize"> {item}</Typography>
  </Stack>
);

export default BodyPart;
