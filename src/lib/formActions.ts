'use server'

import { z } from 'zod'
import {prisma} from '@/lib/prisma'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

const ContactScema = z.object({
    name: z.string().min(6),
    phone: z.string().min(6).max(13)
})

export async function saveContact(prevState: any, formdata: FormData){
    const validatedData = ContactScema.safeParse(Object.fromEntries(formdata.entries()))

    if(!validatedData.success){
        return{
            Error: validatedData.error.flatten().fieldErrors
        }
    }

    try {
        await prisma.contact.create({
            data:{
                name: validatedData.data.name,
                phone: validatedData.data.phone
            }
        })
    } catch (error) {
        return {message: 'Failed to create contact'}
    }

    revalidatePath('/contacts')
    redirect('/contacts')
}

export async function updateContact(id: string, prevState: any, formdata: FormData){
    const validatedData = ContactScema.safeParse(Object.fromEntries(formdata.entries()))

    if(!validatedData.success){
        return{
            Error: validatedData.error.flatten().fieldErrors
        }
    }

    try {
        await prisma.contact.update({
            data:{
                name: validatedData.data.name,
                phone: validatedData.data.phone
            },
            where:{
                id
            }
        })
    } catch (error) {
        return {message: 'Failed to update contact'}
    }

    revalidatePath('/contacts')
    redirect('/contacts')
}

export async function deleteContact(id: string){

    try {
        await prisma.contact.delete({
            where:{
                id
            }
        })
    } catch (error) {
        return {message: 'Failed to delete contact'}
    }

    revalidatePath('/contacts')
}

