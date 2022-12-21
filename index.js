import express from 'express';
import bodyParser from './bodyParser';
const app=express();
const port=5000;
app.use(bodyParser.json());