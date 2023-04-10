import React from 'react'
import Categories from './Categories'
import FormProduct from './FormProduct';

const Controller = (controller: any) => {
  return (
    <main>
        {controller?.data === 'category' ? <Categories /> : null}  
        {controller?.data === 'create' ? <FormProduct />: null}
  
    </main>
  )
}

export default Controller
