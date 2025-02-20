
import { SignInButton, SignOutButton, UserButton } from '@clerk/clerk-react'
import React from 'react'
import { Button } from './components/ui/button'
import Header from './components/ui/Header'
import Hero from './components/Hero'
import Category from './components/Category'
import MostSearchedCar from './components/MostSearchedCar'
import InfoSection from './components/InfoSection'
import Footer from './components/Footer'
// import Header from './components/ui/Header'
function Home() {
  return (
    <div>
<Header/>
<SignInButton mode='modal' forceRedirectUrl='/'>
<Button>kgf</Button></SignInButton>
<SignOutButton>
  <Button>out</Button>
</SignOutButton>  

{/* Hero */}
<Hero/>
{/* <Categoty> */}
<Category/>
{/* Most searcherd car */}
<MostSearchedCar/>
{/* InfoSection */}
<InfoSection/>
{/* Footer */}
<Footer/>
    </div>
  )
}

export default Home