import { serviceNotes, deleteById, getById, getAllNotes, updateNotes, searchNotes } from "../service/service-notes.js"

export const notesController = async (req, res, next)=> {
  try {
    const result = await serviceNotes(req.body)
    
    res.status(200).json({
        message: result
    })
  } catch (err) {
    next(err)
  }
}

export const deleteById_controller = async (req, res, next)=> {
 try {
  const id = Number(req.params.id)
    const result = await deleteById(id)
  res.status(200).json({
    message: "Sukses Terhapus!",
    return: result
  })
 } catch (e) {
    next(e)
 }
}

export const getById_controller = async (req, res, next)=> {
   try {
    const id = Number(req.params.id)
    const result = await getById(id)
    
    res.status(200).json({
      message: result
    })
   } catch (e) {
   next(e)
   }
}

export const getAllNotes_controller = async (req, res, next) => {
  try {
    const allNotes = await getAllNotes()
    res.status(200).json({
      notes: allNotes
    })
  } catch (e) {
    next(e)
  }
}

export const updateNotes_controller = async (req, res, next)=> {
  try {
    const id = Number(req.params.id)
    const result = await updateNotes(id, req.body)

    res.status(200).json({
      message: result
    })
  } catch (e) {
    next(e)
  }
}

export const searchByTitle_controller = async (req, res, next)=> {
  try {
    const {page} = req.query
    const {searchByTitle} = req.params
    const perPage_a = Number(req.query.perPage)
    const result = await searchNotes(page, perPage_a, searchByTitle)

    res.status(200).json({
       message: result
    })
  } catch (e) {
    next(e)
  }
} 
