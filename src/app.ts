import 'dotenv/config';
import app from './controllers/server';

const PORT = process.env.PORT || process.env.LOCAL_PORT;

app.listen(PORT, () => {
    console.log(`On port: ${PORT}`)
})