import { IUserRepository } from '../interfaces/IUserRepository';
import { User } from '../entities/User';

export class GetAllUsers {
    constructor(private userRepository: IUserRepository) {}

    async execute(): Promise<User[]> {
        return this.userRepository.findAll();
    }
}
