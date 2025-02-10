import React from 'react'
import Navbar from './components/navbar'
 
const landingpageLayout= ({children}:{children:React.ReactNode}) => {
  return (
    <div> 
<Navbar/>
    <main>
        {children}
    </main>
    
    </div>
  )
}

export default landingpageLayout