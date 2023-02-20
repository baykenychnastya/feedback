import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { SequelizeModule } from "@nestjs/sequelize";
import { Feedback } from "./feedbacks/feedback.models";
import { FeedbacksModule } from "./feedbacks/feedbacks.module";
import { ValidationPipe } from "./pipes/validation.pipe";


@Module({
    controllers: [],
    providers: [ValidationPipe],
    imports: [
        ConfigModule.forRoot({
            envFilePath: '.env'
        }),
        SequelizeModule.forRoot({
            dialect: 'postgres',
            host: process.env.POSTGRES_HOST,
            port: Number(process.env.POSTGRES_PORT),
            username: process.env.POSTGRES_USER,
            password: process.env.POSTGRES_PASSWORD,
            database: process.env.POSTGRES_DB,
            models: [Feedback],
            autoLoadModels: true,
            dialectOptions: {
                ssl: {
                    require: 'true'
                }
            },
            synchronize: false
        }),
        FeedbacksModule,
    ]
})
export class AppModule {}