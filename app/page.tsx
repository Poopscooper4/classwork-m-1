import React from 'react'
import WelcomeMessage from '@/WelcomeMessage/WelcomeMessage'

const Home = () => {
  return (
    <div className='flex flex-col items-center justify-center mt-20 text-center'>
      <WelcomeMessage />
    </div>
  )
}

export default Home