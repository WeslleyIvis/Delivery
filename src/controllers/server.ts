import express from 'express';
import appConfig from './config/expConfig';

const app = express();
appConfig(app);

export default app;
