import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { start } from 'repl';
import { CreateLessonInput } from './lesson.input';
import { LessonService } from './lesson.service';
import { LessionType } from './lesson.type';

@Resolver((of) => LessionType)
export class LessionResolver {
  constructor(private lessonService: LessonService) {}
  @Query((returns) => LessionType)
  lession(@Args('id') id: string) {
    return this.lessonService.getLesson(id);
  }

  @Mutation((returns) => LessionType)
  createLesson(
    @Args('createLessonInput') createLessonInput: CreateLessonInput,
  ) {
    return this.lessonService.createLesson(createLessonInput);
  }
}
