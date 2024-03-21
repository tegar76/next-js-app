import React from 'react'
import { getContacts } from '@/lib/getContacts';
import { CreateButton, DeleteButton, EditButton, } from './Button';

export default async function ContactTable() {

    const contacts = await getContacts();

  return (
    <div>

        <CreateButton />

        <table className='border-collapse border border-slate-400 w-full text-sm text-left text-slate-200 my-6'>
            <thead className='text-sm text-slate-100 uppercase bg-sky-900 border border-slate-500'>
                <tr>
                    <th className='py-3 px-5'>No</th>
                    <th className='py-3 px-5'>Name</th>
                    <th className='py-3 px-5'>Phone Number</th>
                    <th className='py-3 px-5'>Created At</th>
                    <th className='py-3 px-5 text-center'>Action</th>
                </tr>
            </thead>
            <tbody>
                {
                    contacts.map((contact, index) => (
                        <tr key={contact.id} className={index % 2 === 0 ? 'bg-slate-700' : 'bg-slate-600'}>
                            <td className='py-3 px-5'>{index + 1}</td>
                            <td className='py-3 px-5'>{contact.name}</td>
                            <td className='py-3 px-5'>{contact.phone}</td>
                            <td className='py-3 px-5'>{contact.createAt.toDateString()}</td>
                            <td className='py-3 px-5 text-center flex gap-x-3'>
                                <EditButton id={contact.id}/>
                                <DeleteButton id={contact.id}/>
                            </td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    </div>
  )
}
