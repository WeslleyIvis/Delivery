import 'dotenv/config';
import app from './app/index';

const PORT = process.env.PORT || process.env.LOCAL_PORT;

app.get('/', (req, res) => {
    res.send('OK');
})

app.listen(PORT, () => {
    console.log(`On port: ${PORT}`)
})