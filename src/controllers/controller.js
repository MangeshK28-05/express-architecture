import { data } from "../data/data.js";
import AppError from "../utils/AppError.js";

export function getAll(req,res){
    res.status(200).json(data)
}

export function getOne(req,res){
    const id = Number(req.params.id)

    const item = data.find((o) => o.id === id)

    if(!item){
        throw new AppError('no user found', 404)
    }

    res.status(200).json(item)
}

export function createOne(req,res){
    const {name} = req.body

    if(!name){
        throw new AppError('name is required', 400)
    }

    const newItem = {
        id: data.length ? Math.max(...data.map(item => item.id)) + 1 : 1,
        name
    }

    data.push(newItem)

    res.status(201).json(newItem)
}

export function updateOne(req,res){
    const {name} = req.body
    const id = Number(req.params.id)

    const item = data.find((o)=> o.id === id)

    if(!item){
        throw new AppError('item not found', 404)
    }
    if(!name){
        throw new AppError('name is required', 400)
    }
    item.name = name

    res.status(200).json(item)
}

export function deleteOne(req,res){
    const id = Number(req.params.id)
    const index = data.findIndex((o)=> o.id ===id)

    if(index === -1){
        throw new AppError('item not found', 404)
    }

    const deleteItem = data.splice(index,1)

    res.status(200).json({
        message: "Item deleted successfully",
        data: deleteItem[0]
    })
}
