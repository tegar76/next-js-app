'use client'

import { deleteContact } from '@/lib/formActions'
import clsx from 'clsx'
import Link from 'next/link'
import React from 'react'
import { useFormStatus } from 'react-dom'

export function CreateButton() {
  return (
    <Link href="/contacts/create" className='text-white bg-sky-700 hover:bg-sky-800 px-5 py-2 rounded-md text-xs'>
        Add contact
    </Link>
  )
}

export function EditButton({id}: {id: string}) {
  return (
    <Link href={`/contacts/edit/${id}`} className='text-white bg-green-700 hover:bg-green-800 px-5 py-2 rounded-md text-xs'>
        Edit
    </Link>
  )
}

export function DeleteButton({id}: {id: string}) { 

  const deleteContactWithId = deleteContact.bind(null, id)

  return (
    <form action={deleteContactWithId}>
      <button className='text-white bg-red-700 hover:bg-red-800 px-5 py-2 rounded-md text-xs'>
        Delete
      </button>
    </form>
  )
}

export function SubmitButton({label}: {label:string}) {

  const {pending} = useFormStatus()

  const className = clsx('text-white bg-sky-700 hover:bg-sky-800 px-5 py-2 rounded-md text-xs', {
    'opacity-50 cursor-progress': pending
  })

  return (
    <button type="submit" className={className} disabled = {pending}>
       {
        label === 'save' ? 
          (<span>{pending ? 'Saving...' : 'Save'}</span>) : 
          (<span>{pending ? 'Updating...' : 'Update'}</span>)
       }
    </button>
  )
}