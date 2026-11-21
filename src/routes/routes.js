import express from 'express'
import { getAll,
    getOne,
    createOne,
    updateOne,
    deleteOne
 } from '../controllers/controller.js'

import asyncCatcher from '../utils/asyncCatcher.js'

const router = express.Router()

router.get("/", asyncCatcher(getAll))
router.get("/:id", asyncCatcher(getOne))
router.post("/", asyncCatcher(createOne))
router.put("/:id", asyncCatcher(updateOne))
router.delete("/:id", asyncCatcher(deleteOne))
export default router