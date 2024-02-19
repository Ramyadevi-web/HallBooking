import { Router} from "express"
import RoomRouter from './room.js'
import BookingRouter from './booking.js'

const router = Router()

router.get('/',(req,res)=>{
   res.status(200).send("<h1>Welcome to Hall Booking</h1>")
})

router.use('/room',RoomRouter)
router.use('/booking',BookingRouter)

export default router