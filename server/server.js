const http = require('http');
const socketIo = require('socket.io');
const mongoose = require("mongoose");
const dotenv = require("dotenv")
const { app } = require("./app")
const message = require("./model/message.model")
const cors  = require("cors")

dotenv.config();
app.use(cors({origin:"*", methods:"*"}));

const server= http.createServer(app)
const io= socketIo(server)

const mongoURL = process.env.MONGO_URL;

mongoose.connect(mongoURL)
    .then(() => {
        console.log(`connected to database`);
    }).catch((err) => {
        console.log(`error to connect to database`);
    });

    
    io.on('connection', (socket) => {
        console.log('A user connected');
        socket.on('chat message', (msg) => {
            console.log(`Message from client: ${msg}`);
            const newMessage= new message({
                content: msg.content,
                userMessage:new mongoose.Types  .ObjectId(msg.userMessage)
            });
            newMessage.save()
            .then(() => {
                console.log('Message saved to database');
            })
            .catch((err) => {
                console.error('Error saving message to database:', err);
            });

            io.emit('chat message', msg);
        });
    
        socket.on('disconnect', () => {
            console.log('User disconnected');
        });
    });
    

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
    console.log(`the server is running on port ${PORT}`)
})