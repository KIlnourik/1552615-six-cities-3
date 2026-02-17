import { User } from './user';

export type Review = {
  id: string;
  date: string;
  user: Omit<User, 'email'>;
  comment: string;
  rating: number;
}
