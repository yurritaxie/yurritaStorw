# 实现简易聊天室应用

1、创建WebSocket对象

在客户端创建WebSocket对象，需要指定连接的服务器地址和端口号，例如：

```const socket = new WebSocket('ws://localhost:8080');```

监听WebSocket事件

**Websocket对象有四个主要的事件：**
**onopen：当WebSocket连接建立成功后触发。**
**onmessage：当WebSocket接收到服务器发送的消息时触发。**
**onclose：当WebSocket关闭连接时触发。**
**onerror：当WebSocket发生错误时触发。**

在这里我们只需要监听onopen和onmessage事件，例如：

```js
socket.onopen = () => {
  console.log('WebSocket连接已建立。');
};
socket.onmessage = event => {
  const data = JSON.parse(event.data);
  console.log(`收到消息：${data.message}`);
};
```

2、发送消息

在聊天室应用中，用户需要发送消息到服务器，然后服务器将消息广播给其他用户。我们可以通过调用WebSocket对象的send方法来发送消息，例如：

```js
const message = {
  username: 'John',
  message: 'Hello, World!'
};
socket.send(JSON.stringify(message));
```

3、广播消息

在服务器端，我们需要监听WebSocket连接事件，并将接收到的消息广播给所有客户端。具体实现可以使用Node.js的ws库，例如：


```js
const WebSocket = require('ws');

const wss = new WebSocket.Server({ port: 8080 });

wss.on('connection', ws => {
  console.log('burgerBro--WebSocket连接已建立。');

  ws.on('message', message => {
    console.log(`收到消息：${message}`);
// 广播消息给所有客户端
wss.clients.forEach(client => {
  if (client.readyState === WebSocket.OPEN) {
    client.send(message);
  }
});
```
# 步骤5：客户端页面展示
最后一步，我们需要在客户端页面上展示聊天记录和输入框，让用户可以发送和接收消息。具体实现可以使用 HTML、CSS 和 JavaScript。

<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title >聊天室</title>
</head>
<body>
  <div id="chat">websocket入门</div>
  <input type="text" id="message" placeholder="请输入消息--burgerBro">
  <button id="send">发送</button>
</body>

<script>
    const socket = new WebSocket('ws://localhost:8080');

    const chat = document.getElementById('chat');
    const message = document.getElementById('message');
    const send = document.getElementById('send');
    
    socket.onopen = () => {
      console.log('burgerBro-WebSocket连接已建立。');
    };
    
    socket.onmessage = event => {
      const data = JSON.parse(event.data);
      const p = document.createElement('p');
      p.innerText = `${data.username}: ${data.message}`;
      chat.appendChild(p);
      chat.scrollTop = chat.scrollHeight;
    };
    
    send.addEventListener('click', () => {
      const data = {
        username: 'John',
        message: message.value
      };
      socket.send(JSON.stringify(data));
      message.value = '';
    });
</script>
<style>
#chat {
    height: 500px; 
    overflow-y: scroll;
    }
</style>
</html>