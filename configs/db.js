'use strict'

import mongoose from "mongoose"

 export const dbConnetion = async () =>{
    try{
        mongoose.connection.on('error', () => {
            console.log('MongoDB | no se pudo conectar a MongoDB')
            mongoose.disconnect()
        })

        mongoose.connection.on('connecting', () => {
            console.log('MongoDB | intentando conectar a MongoDB')
        })

        mongoose.connection.on('connected', () => {
            console.log('MongoDB | conectado a MongoDB')
        })

        mongoose.connection.on('open', () => {
            console.log('MongoDB | conectando a la base datos')
        })

        mongoose.connection.on('reconnected', () => {
            console.log('MongoDB | reconectando a MongoDB')
        })

        mongoose.connection.on('disconnected', () => {
            console.log('MongoDB | desconectano de  MongoDB')
        })

        await mongoose.connect( process.env.URI_MONGODB,{
            serverSelectionTimeoutMS: 5000,
            maxPoolSize: 10
        })
    }catch(error){
        console.log(`Error al conentar la db: ${error}`)
    }
 }