import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { start } from 'repl';
import { LessonService } from './lesson.service';
import { LessionType } from './lesson.type';

@Resolver((of) => LessionType)
export class LessionResolver {
  constructor(private lessonService: LessonService) {}
  @Query((returns) => LessionType)
  lession() {
    return {
      id: '120840131027',
      name: 'Physics Class',
      startDate: new Date().toISOString(),
      endDate: new Date().toISOString(),
    };
  }

  @Mutation((returns) => LessionType)
  createLesson(
    @Args('name') name: string,
    @Args('startDate') startDate: string,
    @Args('endDate') endDate: string,
  ) {
    return this.lessonService.createLesson(name, startDate, endDate);
  }
}
