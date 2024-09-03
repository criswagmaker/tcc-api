import { IUserRepository } from '../interfaces/IUserRepository';
import { User } from '../entities/User';

export class UserRepositoryImpl implements IUserRepository {
    private users: User[] = []; // Simulação de banco de dados

    async create(user: User): Promise<User> {
        // Implementação para salvar o usuário no banco de dados
        this.users.push(user);
        return user;
    }

    async findByEmail(email: string): Promise<User | null> {
        // Implementação para buscar o usuário pelo email
        return this.users.find(user => user.email === email) || null;
    }

    async findAll(): Promise<User[]> {
        return this.users;
    }
}
