import express from "express";
import logger from 'morgan';
import { Server } from "socket.io";
import { createServer } from "node:http";
import mongoose from "mongoose";
import { messageSchema } from "./msgSchema";



const port = process.env.PORT ?? 3000
const app = express()
const server = createServer(app)
const io = new Server(server)
app.use(logger('dev'))

mongoose.connect("mongodb+srv://ignasiFloz:setasoujiro1@livechat.y9bptop.mongodb.net/?retryWrites=true&w=majority")
.then(()=>console.log("u are connected to mongodb"))
.catch((error) => console.error(error))




//crear usuarios 
//crear salas 
//persistencia de datos





io.on('connection', (socket)=>{
	
	 socket.on ('chat message',async (msg)=>{
		const message = JSON.parse(msg)
		console.log(JSON.parse(msg))
		const m = new messageSchema ({
			text: message.text,
			user: message.user,
			room: message.room
		})
		socket.join(message.room)
		
				
		socket.on('disconnect',()=>{
			console.log(`user: ${m.user} is disconnected`);
		})
		
		
		m.save()
            .then((savedMessage) => {
                io.to(message.room).emit('chat message', savedMessage);
            })
            .catch((error) => {
                console.error('Error al guardar el mensaje:', error);
            });
	}) 
	socket.on('join room', (roomRecord)=>{
		messageSchema.find({room: roomRecord})
			.then((messages)=>{
				socket.emit('room messages',messages)
			})
				.catch((error)=>{
					console.error('error IGNA')
				})
	})
})



const url = process.cwd().split('dist')
app.get('/',(req, res)=> {
	res.sendFile(url[0]  + 'src/frontend/index.html')
})//sirve el front end
server.listen(port, ()=>{
	console.log(`server runing on http://localhost:${port}`);
})// server listen