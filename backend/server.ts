import express, { Request, Response } from 'express';
import cors from 'cors'; //install type definition for cors "npm install --save-dev @types/cors"

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.get('/api/hello', (req: Request, res: Response) => {
  res.json({ message: 'Hello from Express with TypeScript!' });
});

// Port
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Backend running on port ${PORT}`);
});
