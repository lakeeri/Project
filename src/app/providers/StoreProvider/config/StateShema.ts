import { CounterShema } from 'entities/Counter';
import { UserSchema } from 'entities/User';

export interface StateShema {
    counter: CounterShema,
    user: UserSchema
}
