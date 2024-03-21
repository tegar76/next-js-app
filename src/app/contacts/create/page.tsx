import CreateForm from '@/components/CreateForm'
import React from 'react'

export default function page() {
  return (
    <>
        <h1 className='text-2xl text-center mb-3 text-white font-bold'>Create new contact</h1>
        <CreateForm />
    </>
  )
}
