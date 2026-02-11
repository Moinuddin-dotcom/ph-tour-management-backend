import { Server } from 'http';
import mongoose from 'mongoose';
import app from './app';

let server: Server;

const startServer = async () => {
    try {
        await mongoose.connect('mongodb+srv://ph-tour-management:rKGSkWyhPykzlWjW@cluster0.afwrd.mongodb.net/tour-management-backend?appName=Cluster0')
        console.log("Connected to DB..")
        server = app.listen(5000, () => {
            console.log("Server is running on port 5000")
        })
    } catch (error) {
        console.log(error)
    }
}

startServer()


// signal termination error
process.on('SIGTERM', () => {
    console.log('SIGTERM received.... Server Shutting down...')
    if (server) {
        server.close(() => {
            process.exit(1)
        })
    }
    process.exit(1)
})


process.on('unhandledRejection', (err) => {
    console.log('Unhandled Rejection deceted.... Server Shutting down...', err)
    if (server) {
        server.close(() => {
            process.exit(1)
        })
    }
    process.exit(1)
})

// Promise.reject(new Error('Unhandled Rejection Error'))

process.on('uncaughtException', (err) => {
    console.log('Uncaught Exception deceted.... Server Shutting down...', err)
    if (server) {
        server.close(() => {
            process.exit(1)
        })
    }
    process.exit(1)
})

// throw new Error('Uncaught Exception Error')



/*
* Unhandled rejection error
* Uncaught rejection error
* signal termination error
*/

