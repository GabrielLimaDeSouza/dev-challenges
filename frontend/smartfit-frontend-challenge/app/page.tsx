"use client"

import Header from './components/header'
import Layout from './components/layout'
import Scheduler from './components/scheduler'
import InformationBanner from './components/information-banner'
import Footer from './components/footer'
import UnitContainer from './components/units-container'

export default function Home() {
  
  return (
    <div>
      <Header />
      <Layout>
        <div className="main-text flex flex-col gap-6">
          <h3 className='font-bold text-3xl'>REABERTURA<br></br>SMART FIT</h3>
          <div className="border w-20 h-2.5 bg-black"></div>
          <p className="description text-base font-light mb-6">
            O horário de funcionamento das nossas unidades está seguindo os decretos de cada município. Por isso, confira aqui se a sua unidade está aberta e as medidas de segurança que estamos seguindo.
          </p>
        </div>
        <Scheduler />
        <InformationBanner />
        <UnitContainer />
      </Layout>
      <Footer />
    </div>
  )
}
