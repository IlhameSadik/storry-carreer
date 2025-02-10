import React from 'react'
 
const landingpageLayout= ({children}:{children:React.ReactNode}) => {
  return (
    <div> 

    <main>
        {children}
    </main>
    
    </div>
  )
}

export default landingpageLayout