import express from 'express';
import { UserController } from './controllers/UserController';
import { validateUserData } from './middlewares/validateUserData';
import { RegisterUser } from './use-cases/RegisterUser';
import { GetAllUsers } from './use-cases/GetAllUsers';
import { UserRepository } from './repositories/UserRepository';

const app = express();
app.use(express.json());

const userRepository = new UserRepository();
const registerUser = new RegisterUser(userRepository);
const getAllUsers = new GetAllUsers(userRepository);
const userController = new UserController(registerUser, getAllUsers);

// Definindo rotas
app.post('/users', (req, res) => userController.register(req, res));
app.get('/users', (req, res) => userController.getAll(req, res));

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
