'use client'

import { saveContact, updateContact } from '@/lib/formActions'
import React from 'react'
import { useFormState } from 'react-dom'
import { SubmitButton } from './Button'
import { Contact } from '@prisma/client'

export default function EditForm({contact}: {contact: Contact}) {

    const updateContactWithId = updateContact.bind(null, contact.id)

    const [state, formAction] = useFormState(updateContactWithId, null)

  return (
    <>
        <form action={formAction}>
            <div className='flex flex-col gap-y-3'>
                <div className='mb-3'>
                    <label htmlFor="name" className='text-slate-200'>Name</label>
                    <input type="text" name='name' id='name' className='w-full bg-slate-700 text-slate-200 p-2 rounded-md border border-slate-500 mt-2' defaultValue={contact.name} />
                    <div id="name-error" arial-live='polite' arial-atomic='true'>
                        <p className="mt-2 text-sm text-red-500">{state?.Error?.name}</p>
                    </div>
                </div>
                <div className='mb-3'>
                    <label htmlFor="phone" className='text-slate-200'>Phone Number</label>
                    <input type="text" name='phone' id='phone' className='w-full bg-slate-700 text-slate-200 p-2 rounded-md border border-slate-500 mt-2' defaultValue={contact.phone} />
                    <div id="phone-error" arial-live='polite' arial-atomic='true'>
                        <p className="mt-2 text-sm text-red-500">{state?.Error?.phone}</p>
                    </div>
                </div>
                
                <div id="message-error" arial-live='polite' arial-atomic='true'>
                    <p className="mt-2 text-sm text-red-500">{state?.message}</p>
                </div>

                <SubmitButton label='update' />
            </div>
        </form>
    </>
  )
}
