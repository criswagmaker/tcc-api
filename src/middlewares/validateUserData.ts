import { Request, Response, NextFunction } from 'express';

export const validateUserData = (req: Request, res: Response, next: NextFunction) => {
  const { firstName, lastName, email, password } = req.body;

  if (!firstName || !lastName || !email || !password) {
    return res.status(400).json({ error: 'Missing required fields: firstName, lastName, email, or password' });
  }

  // Validação básica do email
  const emailRegex = /\S+@\S+\.\S+/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ error: 'Invalid email format' });
  }

  // Validação básica da senha (pelo menos 6 caracteres)
  if (password.length < 6) {
    return res.status(400).json({ error: 'Password must be at least 6 characters long' });
  }

  // Se tudo estiver correto, passa para o próximo middleware ou rota
  next();
};
