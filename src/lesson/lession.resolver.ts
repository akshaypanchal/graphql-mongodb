import { Query, Resolver } from '@nestjs/graphql';
import { LessionType } from './lesson.type';

@Resolver((of) => LessionType)
export class LessionResolver {
  @Query((returns) => LessionType)
  lession() {
    return {
      id: '120840131027',
      name: 'Physics Class',
      startDate: new Date().toISOString(),
      endDate: new Date().toISOString(),
    };
  }
}
