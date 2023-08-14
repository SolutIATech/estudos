import axios from 'axios';

export default axios.create({
    baseURL:'https://9c96-103-106-239-104.ap.ngrok.io',
    headers: {'ngrok-skip-browser-warning': 'true','Access-Control-Allow-Headers': 'Content-Type,Authorization', 'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,OPTIONS', 'Access-Control-Allow-Credentials': 'true'}
});