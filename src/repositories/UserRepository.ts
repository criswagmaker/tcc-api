import { IUserRepository } from '../interfaces/IUserRepository';
import { User } from '../entities/User';

export class UserRepository implements IUserRepository {
  private users: User[] = [];

  async create(user: User): Promise<User> {
    // Simula a criação de um novo usuário e o adiciona à lista em memória
    this.users.push(user);
    return user;
  }

  async findByEmail(email: string): Promise<User | null> {
    // Busca um usuário por email
    const user = this.users.find(user => user.email === email);
    return user || null;
  }

  async findAll(): Promise<User[]> {
    // Retorna todos os usuários armazenados em memória
    return this.users;
  }
}
