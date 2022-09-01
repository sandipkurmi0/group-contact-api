import ChatUser from "./models/ChatUserModel";
import ChatUserService from "./services/ChatUserService";
const chatUserService = new ChatUserService(new ChatUser().getModel());

import Message from "./models/MessageModel";
import MessageService from "./services/MessageService";
const messageService = new MessageService(new Message().getModel());

const SocketChat = (io) => {
  io.on("connection", (socket) => {
    //when connect
    console.log(`User Connected : ${socket.id}`);

    socket.on("getChatList", async (userId) => {
      console.log("UserId", userId);
      const allUserChats = await chatUserService.fetchChats(userId);
      console.log(allUserChats);
      // io.emit('getChatList', )
    });

    socket.on("disconnect", () => {
      console.log(`User Discnnect; ${socket.id}`);
    });
  });
};

module.exports = SocketChat;
