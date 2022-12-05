import React from 'react';
import ClipLoader from 'react-spinners/ClipLoader';

export default function ImageLoading() {
  return (
    <>
      <ClipLoader 
        color='#36d7b7'
        cssOverride={{
          backgroundColor: 'transparent',
        }} 
      />
    </>
  );
}

