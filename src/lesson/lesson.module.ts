import { Module } from '@nestjs/common';
import { LessionResolver } from './lession.resolver';

@Module({
  providers: [LessionResolver],
})
export class LessonModule {}
