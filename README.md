# Nestjs + Socket.io + Redis adapter demo

### Usage

1. dependency install

```
$ yarn install
```

2. create .env files and add REDIS_HOST environment valuable

```
//.env example
REDIS_HOST=redis://localhost:6379
```

3. Bootstrap the server on two different hosts
4. Connect different servers from two different clients
5. Successful if you can send and receive messages from different clients through the 'echo' event.

---

### Reference

- [Socket.io Redis adapter documentation](https://socket.io/docs/v4/redis-adapter)
- [Nest.js Websocket adapters documentation](https://docs.nestjs.com/websockets/adapter)
