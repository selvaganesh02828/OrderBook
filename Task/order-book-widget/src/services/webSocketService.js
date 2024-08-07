const socket = new WebSocket('wss://api-pub.bitfinex.com/ws/2');

socket.onopen = () => {
  socket.send(
    JSON.stringify({
      event: 'subscribe',
      channel: 'book',
      symbol: 'tBTCUSD',
    })
  );
};

export default socket;
