import BookingController from './booking.js'

const room = [
    {
        id:1,
        roomName : 'A1',
        noOfSeats : '3',
        amenties : ['TV','Telephone','fridge','coffee maker','microwave','ironing capabilities','luggage storage','AC'],
        pricePerHour : 1300
    },
    {
        id:2,
        roomName : 'A2',
        noOfSeats : '3',
        amenties : ['TV','Telephone','luggage storage','AC'],
        pricePerHour : 600
    },
    {
        id:3,
        roomName : 'A3',
        noOfSeats : '3',
        amenties : ['luggage storage','AC'],
        pricePerHour : 300
    },
    {
        id:4,
        roomName : 'A4',
        noOfSeats : '3',
        amenties : ['fridge','coffee maker','microwave'],
        pricePerHour : 200
    },
    {
        id:5,
        roomName : 'A5',
        noOfSeats : '3',
        amenties : ['luggage storage'],
        pricePerHour : 100
    }
]



const createRoom = (req,res)=>{

    let id = room.length + 1
    let data = req.body
    data.id = id
    room.push(data)

    try {
        res.status(200).send({
            message:"Room Created Successfully",
            room
        })
    } catch (error) {
        res.status(500).send({
            message:"Internal Server Error"
        })
    }
}

const getAllRooms = (req,res)=>{
    let roomDetails = [];
    let booked;
    room.map((roomEle)=>{
        booked = false
        BookingController.booking.forEach((bookingEle)=>{
            if(bookingEle.roomId === roomEle.id){
                booked = true
                roomDetails.push({'roomName':roomEle.roomName,
                                  'Booked Status':"Booked",
                                  'Customer Name':bookingEle.customerName,
                                  'Date':bookingEle.date,
                                  'Start Time':bookingEle.startTime,
                                  'End Time':bookingEle.endTime
                                 })
            }
        })
        if(booked != true){
            roomDetails.push({'roomName':roomEle.roomName,
            'Booked Status':"Not Booked"
           })
        }
    })
    try {
      
        res.status(200).send({
            message:"Data fetched successfully",
            roomDetails
        })
    } catch (error) {
        console.log(error)
        res.status(500).send({
            message:"Internal Server Error"
        })
    }
}


export default {
    createRoom,
    getAllRooms,
    room
}