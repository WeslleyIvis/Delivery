import React from 'react'
import MainLayout from './sub_componentes/MainLayout'
import CategoryProductNavSelection from './sub_componentes/CategoryProductNavSelection'
import Footer from './Footer'


const Main = (props: {category: string}) => {

  return (
    <main className='main'>
      {
        props.category && props.category 
        ? 
        <CategoryProductNavSelection category={props.category}/>
        :    
        <MainLayout />
      }
      
      <Footer></Footer>
    </main>
  )
}

export default Main
