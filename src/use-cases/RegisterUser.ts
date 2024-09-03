import { IUserRepository } from '../interfaces/IUserRepository';
import { User } from '../entities/User';

export class RegisterUser {
    constructor(private userRepository: IUserRepository) {}

    async execute(firstName: string, lastName: string,email: string, password: string): Promise<User> {
        const existingUser = await this.userRepository.findByEmail(email);
        if (existingUser) {
            throw new Error('User already exists');
        }

        const user = new User('new-id', firstName, lastName, email, password);
        return this.userRepository.create(user);
    }
}
