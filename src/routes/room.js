import express from 'express'
import RoomController from '../controller/room.js'
const router = express.Router()

router.post('/',RoomController.createRoom)
router.get('/allRooms',RoomController.getAllRooms)

export default router