import { Controller, Body, Post, Get, UsePipes } from '@nestjs/common';
import { ValidationPipe } from 'src/pipes/validation.pipe';
import { CreateFeedbackDto } from './dto/create-feedback.dto';
import { FeedbacksService } from './feedbacks.service';

@Controller('feedbacks')
export class FeedbacksController {

    constructor(private feedbacksService: FeedbacksService) {}

    @UsePipes(ValidationPipe)
    @Post()
    create(@Body() feedbackDto: CreateFeedbackDto) {
        return this.feedbacksService.createFeedback(feedbackDto);
    }

    @Get()
    getAll() {
        return this.feedbacksService.getAllUsers();
    }
}
