import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Feedback } from './feedback.models';
import { FeedbacksController } from './feedbacks.controller';
import { FeedbacksService } from './feedbacks.service';

@Module({
  controllers: [FeedbacksController],
  providers: [FeedbacksService],
  imports: [
    SequelizeModule.forFeature([Feedback])
  ]
})
export class FeedbacksModule {}
