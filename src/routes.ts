import express from 'express';

const routes = express.Router();

routes.get('/users', (req, res) => {
    res.json({ ok: true });
});


export default routes;


