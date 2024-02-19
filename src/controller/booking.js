import RoomController from './room.js'

const booking = [
    {
        customerId : 1,
        bookingId : 11,
        customerName : 'Ramya',
        date : new Date('11-01-2024'),
        startTime : '10 AM',
        endTime : '6 PM',
        roomId : 3
    },
    {
        customerId : 2,
        bookingId : 12,
        customerName : 'Devi',
        date : new Date('2024-01-23'),
        startTime : '10 AM',
        endTime : '6 PM',
        roomId : 5
    },
    {
        customerId : 3,
        bookingId : 13,
        customerName : 'Resh',
        date : new Date('09-01-2024'),
        startTime : '5 AM',
        endTime : '4 PM',
        roomId : 2
    },
    // {
    //     customerName : 'Agath',
    //     date : new Date('2024-01-24'),
    //     startTime : '9 AM',
    //     endTime : '3 PM',
    //     roomId : 1
    // }
    {
        customerId : 4,
        bookingId : 14,
        customerName : 'Devi',
        date : new Date('2024-02-25'),
        startTime : '10 AM',
        endTime : '6 PM',
        roomId : 4
    }
]


const bookingRoom = (req,res)=>{
    let date = new Date(req.body.date )
    let bookingId = booking[booking.length - 1].bookingId + 1;
    req.body.bookingId = bookingId
    req.body.date = date
    let data = req.body
    booking.push(data)
    try {
        if(req.body.roomId < RoomController.room.length){
        res.status(200).send({
            message:"Room Booked Successfully",
            booking
        
        })
        }else{
            res.status(407).send({
                message:"Client Side Error"
        })
}
    }
     catch (error) {
        res.status(500).send({
            message:"Internal Server Error"
        })
    }
}

const getAllCustomers = (req,res)=>{
    let customerDetails = []
    booking.map((bookingEle)=>{
        RoomController.room.forEach((roomEle)=>{
            if(bookingEle.roomId == roomEle.id){
                customerDetails.push({
                           'Customer Name':bookingEle.customerName,
                           'Room Name': roomEle.roomName,
                           'Date':bookingEle.date,
                           'Start Time':bookingEle.startTime,
                           'End Time':bookingEle.endTime
                           })
            }
        })
          })
    try {
      
        res.status(200).send({
            message:"Data fetched successfully",
            customerDetails
        })
    } catch (error) {
        console.log(error)
        res.status(500).send({
            message:"Internal Server Error"
        })
    }
}

const getCustomerById =(req,res)=>{
    let customerBookings = []
    let currRoomName
        let {id} = req.params
        console.log(id,req.params);
    booking.forEach((ele)=>{
        if(ele.customerId == id){
            RoomController.room.forEach((roomEle)=>{
                if(roomEle.id == ele.roomId){
                    currRoomName = roomEle.roomName
                }
            })
        
            customerBookings.push({
                'Customer Name': ele.customerName,
                'Room Name':currRoomName,
                'Date':ele.date,
                'Start Time': ele.startTime,
                'End Time':ele.endTime,
                'Booking Id':ele.bookingId
            })
        }
    })
    try {
        res.status(200).send({
            message: "Data Fetched Successfully",
            customerBookings
        })
    } catch (error) {
        res.status(500).send({
            message:"Internal Server Error"
        })
    }
    }

export default {
    bookingRoom,
    getAllCustomers,
    getCustomerById,
    booking
}