import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { v4 as uuid } from 'uuid';
import { Lession } from './lession.entity';

@Injectable()
export class LessonService {
  constructor(
    @InjectRepository(Lession) private lessonRepository: Repository<Lession>,
  ) {}

  async createLesson(name, startDate, endDate): Promise<Lession> {
    const lesson = this.lessonRepository.create({
      id: uuid(),
      name,
      startDate,
      endDate,
    });
    return this.lessonRepository.save(lesson);
  }
}
