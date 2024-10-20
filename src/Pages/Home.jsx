import React from 'react'
import Homepage from '../Components/Homepage'
import Features from '../Components/Features'
import Iframe from '../Components/Iframe'
import Erp from '../Components/Erp'
import Integration from '../Components/Integration'
import Brand from '../Components/Brand'
import Testimonials from '../Components/Testimonials'
import Signup from '../Components/Signup'
import Faq from '../Components/Faq'
import Automate from '../Components/Automate'
import General from '../Layout/General'



function Home() {
  return (
    <>
    <General>
    <Homepage/>
    <Features/>
    <Iframe/>
    <Erp/>
    <Integration/>
    <Brand/>
    <Testimonials/>
    <Signup/>
    <Faq/>
    <Automate/>
    </General>
    </>
  )
}

export default Home