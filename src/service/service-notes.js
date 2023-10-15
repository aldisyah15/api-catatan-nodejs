import {prisma} from '../config/database.js';
import { notesValidation } from '../validation/validasi-notes.js';
import { validate } from '../validation/validation.js';

export const serviceNotes = async(request)=> {
    const notesResult = validate(notesValidation, request)
    return await prisma.notes.create({
        data: notesResult,
        select: {
            id: true,
            title: true,
            description: true
        }
    })
}

export const deleteById = async (request) => {
        const countId = await prisma.notes.count({
            where: {
                id: request
            }
        })

        if (countId === 0) {
          throw new Error("Id yang mau anda hapus, tidak ditemukan")
        } else {
            const deleteById = await prisma.notes.delete({
                where: {
                    id: request
                }
            })
        
            return deleteById
        
        }
}

export const getById = async (request) => {
    const countId = await prisma.notes.count({
        where: {
            id: request
        }
    })

    if (countId === 0) {
        throw new Error("Id yang mau anda hapus, tidak ditemukan")
    } else {
        const getById = await prisma.notes.findFirst({
            where: {
                id: request
            }
        })
        return getById;
    }
}

export const getAllNotes = async () => {
    const getAllNotes = await prisma.notes.findMany()
    return getAllNotes
}

export const updateNotes = async (request, update)=> {
    const updateNote = await prisma.notes.update({
        where: {
            id: request
        },
        data: update
    }) 
    return updateNote
}

export const searchNotes = async(page, perPage, searchByTitle, )=> {
    const skip = (page - 1) * perPage;

   
    const notes = await prisma.notes.findMany({
        where: {
            title: {
                contains: searchByTitle
            }
        },
        skip: skip,
        take: perPage
    })

    const totalSearchByTitle = await prisma.notes.count({
        where: {
            title: {
                contains: searchByTitle
            }
        }
    })

    if (notes.length === 0) {
        throw new Error("Data yang anda cari tidak ditemukan")
    }

    return {notes, totalSearchByTitle}
}