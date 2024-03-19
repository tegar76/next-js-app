import React from 'react'

export default function ContactTable() {
  return (
    <div>
        <table className='border-collapse border border-slate-400 w-full text-sm text-left text-slate-400'>
            <thead className='text-sm text-slate-200 uppercase bg-teal-800'>
                <tr>
                    <th className='py-3 px-5'>No</th>
                    <th className='py-3 px-5'>Name</th>
                    <th className='py-3 px-5'>Phone Number</th>
                    <th className='py-3 px-5'>Created At</th>
                    <th className='py-3 px-5 text-center'>Action</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td className='py-3 px-5'></td>
                    <td className='py-3 px-5'></td>
                    <td className='py-3 px-5'></td>
                    <td className='py-3 px-5'></td>
                    <td className='py-3 px-5'></td>
                </tr>
            </tbody>
        </table>
    </div>
  )
}
