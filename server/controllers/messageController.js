const messageModel = require("../model/messageModel");
const addMsg = async (req, res, next) => {
  try {
    console.log("Sending message");
    const { from, to, message } = req.body;
    const data = await messageModel.create({
      message: { text: message },
      users: [from, to],
      sender: from,
    });
    if (data) return res.json({ msg: "Message created successfully" });
    return res.json({ msg: "Message not created successfully" });
  } catch (err) {
    next(err);
  }
};

const getAllMsg = async (req, res, next) => {
  try {
    const { from, to } = req.body;
    const messages = await messageModel
      .find({
        $or: [{ users: [from, to] }, { users: [to, from] }],
      })
      .sort({ updatedAt: 1 });

    const projectMessage = messages.map((msg) => {
      return {
        fromSelf: msg.sender.toString() === from,
        message: msg.message.text,
      };
    });
    console.log(projectMessage);
    return res.json(projectMessage);
  } catch (err) {
    next(err);
  }
};
module.exports = { getAllMsg, addMsg };
