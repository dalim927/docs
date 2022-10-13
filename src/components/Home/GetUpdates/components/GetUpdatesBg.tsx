import React from 'react'
import { useColorMode } from '@docusaurus/theme-common';

const GetUpdatesBg = () => {
  const { colorMode } = useColorMode();

  const style = {
    position: 'absolute',
    left: 0,
    bottom: 0,
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    borderRadius: '18px'
  } as React.CSSProperties

  return (
    <div
      style={{
        position: 'absolute',
        left: 0,
        bottom: 0,
        width: '100%',
        height: '100%',
      }}
    >
      {colorMode === 'light' ? (
        <img src={'/img/GetUpdatesBg.png'} alt="icon" style={style} />
      ) : (
        <img src={'/img/GetUpdatesBg-d.png'} alt="icon" style={style} />
      )}
    </div>
  )
}

export default GetUpdatesBg
