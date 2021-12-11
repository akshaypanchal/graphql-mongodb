import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Lession } from './lession.entity';
import { LessionResolver } from './lession.resolver';
import { LessonService } from './lesson.service';

@Module({
  imports: [TypeOrmModule.forFeature([Lession])],
  providers: [LessionResolver, LessonService],
})
export class LessonModule {}
