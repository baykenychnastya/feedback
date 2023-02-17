import { Controller, Body, Post, Get } from '@nestjs/common';
import { CreateFeedbackDto } from './dto/create-feedback.dto';
import { FeedbacksService } from './feedbacks.service';

@Controller('feedbacks')
export class FeedbacksController {

    constructor(private feedbacksService: FeedbacksService) {}

    @Post()
    create(@Body() feedbackDto: CreateFeedbackDto) {
        return this.feedbacksService.createFeedback(feedbackDto);
    }

    @Get()
    getAll() {
        return this.feedbacksService.getAllUsers();
    }
}
