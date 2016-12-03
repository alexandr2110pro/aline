module.exports = function createMessage(req, res) {
  const {name, email, message} = req.body;
  console.log(`Received a message from ${name} <${email}>:\n\n"${message}"`);
  res.json({
    success: true,
    message: 'Message sent'
  });
};
