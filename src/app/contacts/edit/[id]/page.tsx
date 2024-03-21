import React from 'react'
import EditForm from '@/components/EditForm'
import { getContactById } from '@/lib/getContacts'
import { notFound } from 'next/navigation'

export default async function page({params}: {params: {id: string}}) {

  const id = params.id
  const contact = await getContactById(id)

  if (!contact) {
    return notFound()
  }

  return (
     <>
        <h1 className='text-2xl text-center mb-3 text-white font-bold'>Edit contact</h1>
        <EditForm contact = {contact} />
    </>
  )
}
