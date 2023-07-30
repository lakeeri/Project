import { CounterShema } from 'entities/Counter';
import { UserSchema } from 'entities/User';
import { AuthShema } from 'features/AuthByUsername';

export interface StateShema {
    counter: CounterShema,
    user: UserSchema,
    auth: AuthShema
}
