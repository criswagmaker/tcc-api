import { Router } from 'express';
import { UserController } from '../controllers/UserController';
import { RegisterUser } from '../use-cases/RegisterUser';
import { GetAllUsers } from '../use-cases/GetAllUsers';
import { UserRepositoryImpl } from '../data/UserRepositoryImpl';

const userRepository = new UserRepositoryImpl();
const registerUser = new RegisterUser(userRepository);
const getAllUsers = new GetAllUsers(userRepository);
const userController = new UserController(registerUser, getAllUsers);

const router = Router();

router.get('/users', userController.getAll.bind(userController));
router.post('/users', userController.register.bind(userController));

export default router;
