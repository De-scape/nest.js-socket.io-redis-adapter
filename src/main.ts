import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { IoAdapterFactory } from './socket-adapter/IoAdapterFactory'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  app.useWebSocketAdapter(await IoAdapterFactory.createRedisAdapter(app))
  await app.listen(3000)
}

bootstrap()
