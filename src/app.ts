import 'dotenv/config';
import app from './controllers/server';

const PORT = process.env.LOCAL_PORT || 3333;

app.listen(PORT, () => {
    console.log(`On port: ${PORT}`)
})