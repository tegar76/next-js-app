'use client'

import { saveContact } from '@/lib/formActions'
import React from 'react'
import { useFormState } from 'react-dom'
import { SubmitButton } from './Button'

export default function CreateForm() {

    const [state, formAction] = useFormState(saveContact, null)

  return (
    <>
        <form action={formAction}>
            <div className='flex flex-col gap-y-3'>
                <div className='mb-3'>
                    <label htmlFor="name" className='text-slate-200'>Name</label>
                    <input type="text" name='name' id='name' className='w-full bg-slate-700 text-slate-200 p-2 rounded-md border border-slate-500 mt-2' />
                    <div id="name-error" arial-live='polite' arial-atomic='true'>
                        <p className="mt-2 text-sm text-red-500">{state?.Error?.name}</p>
                    </div>
                </div>
                <div className='mb-3'>
                    <label htmlFor="phone" className='text-slate-200'>Phone Number</label>
                    <input type="text" name='phone' id='phone' className='w-full bg-slate-700 text-slate-200 p-2 rounded-md border border-slate-500 mt-2' />
                    <div id="phone-error" arial-live='polite' arial-atomic='true'>
                        <p className="mt-2 text-sm text-red-500">{state?.Error?.phone}</p>
                    </div>
                </div>
                
                <div id="message-error" arial-live='polite' arial-atomic='true'>
                    <p className="mt-2 text-sm text-red-500">{state?.message}</p>
                </div>

                <SubmitButton label='save' />
            </div>
        </form>
    </>
  )
}
