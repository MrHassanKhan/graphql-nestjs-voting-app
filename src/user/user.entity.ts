import { ObjectType, Field } from '@nestjs/graphql';
import { Poll } from 'src/poll/entities/poll.entity';
import {Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';


@ObjectType()
@Entity()
export class MainUser {
  @PrimaryGeneratedColumn('uuid')
  @Field(() => String)
  id: string;

  @Field(() => String, { description: 'UserName' })
  @Column()
  userName: string;

  @Field(() => String, { description: 'Email' })
  @Column()
  email: string;

  @Field(() => String, { description: 'password' })
  @Column()
  password: string;
  
  @Field(() => Boolean, { description: 'active' })
  @Column({ default: false })
  isActive: boolean;


  @Field(() => [Poll])
  @OneToMany(() => Poll, poll => poll.user)
  pollOptions: Promise<Poll[]>;

  // public async comparePassword(password: string): Promise<boolean> {
  //   return await bcrypt.compare(password, this.password, 12);
  // }

  
  
}
