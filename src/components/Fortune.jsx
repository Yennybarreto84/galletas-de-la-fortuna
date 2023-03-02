import React from 'react'

const Fortune = ( {FortuneData} ) => {
  return (
    <div className='fortuna__cards'>
    <div className='fortuna__cards--center'>
      <p className='fortuna__parrafo'>"{FortuneData?.phrase}"</p>
      <p className='fortuna__fuente'>Autor: {FortuneData?.author}</p>
    </div>
    
</div>
  )
}

export default Fortune