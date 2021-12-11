import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType('Lession')
export class LessionType {
  @Field((type) => ID)
  id: string;

  @Field()
  name: string;

  @Field()
  startDate: string;

  @Field()
  endDate: string;
}
