import allowedOrigins from "./allowedOrigins.js"

const corsOptions = {
    origin: (origin, callback) => {
        if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
            callback(null, true);
        } else {
            callback(new Error('Not allowed by CORS'));
        }
    },
    optionsSuccessStatus: 200
};

// Set the 'Access-Control-Allow-Origin' header to '*'
corsOptions.origin = '*';
export default corsOptions;
export { corsOptions };