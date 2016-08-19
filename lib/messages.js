module.exports = (sender, body, id=Date.now()) => {
  return {sender: sender, body: body};
};
