import { Router} from "express";
import BookingController from '../controller/booking.js'

const router = Router()

router.post('/',BookingController.bookingRoom)
router.get('/',BookingController.getAllCustomers)
router.get('/:id',BookingController.getCustomerById)

export default router