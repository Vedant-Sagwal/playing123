let io;

function setupSocket(server) {
    io = require("socket.io")(server);

    io.on("connection", (socket) => {
        console.log(`User connected: ${socket.id}`);

        socket.on("join-room", (room) => {
            socket.join(room);
            io.to(room).emit("message", `User ${socket.id} joined`);
        });

        socket.on("message", ({ room, message }) => {
            io.to(room).emit("message", message);
        });

        socket.on("disconnect", () => {
            console.log(`User disconnected: ${socket.id}`);
        });
    });
}

function getIO() {
    if (!io) {
        throw new Error("Socket.IO not initialized!");
    }
    return io;
}

module.exports = { setupSocket, getIO };

