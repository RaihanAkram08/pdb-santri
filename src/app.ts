import express from 'express';
import santriRoute from './routes/santriRoute';

const app = express();

app.use(express.json());
app.use('/api', santriRoute);

app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});

