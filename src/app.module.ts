import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { CreateAccountController } from './controllers/create-account.controller'
import { PrismaService } from './prisma/prisma.service'
import { envSchema } from './env'
import { AuthenticateController } from './controllers/authenticate.controller'
import { authModule } from './auth/auth.module'
import { CreateQuestionController } from './controllers/create-question-controller'
import { FetchRecentQuestionsController } from './controllers/fetch-recent-question.controller'

@Module({
  imports: [
    ConfigModule.forRoot({
      validate: (env) => envSchema.parse(env),
      isGlobal: true,
    }),
    authModule,
  ],
  controllers: [
    CreateAccountController,
    AuthenticateController,
    CreateQuestionController,
    FetchRecentQuestionsController,
  ],
  providers: [PrismaService],
})
export class AppModule {}
