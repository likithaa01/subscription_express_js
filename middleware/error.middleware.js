const errorMiddleware = (err, req, res, next) => {
    try {
        let error = { ...err };

        error.message = err.message;

        console.log(err);

        if (err.name == 'CastError') {
            const message = 'Resource not found';
            error = new Error(message);
            error.statusCode = 404;
        }

        if (err.code == 11000) {
            const message = 'Duplicate field value entered';
            error = new Error(message);
            error.statusCode = 400;
        }

        if (err.name == 'ValidateError') {
            const messge = Object.values(err.errors).map(val => val.message);
            error = new Error(message.join(', '));
            error.statusCode = 400;
        }

        res.status(error.statusCode || 500).json({ success : false, error: error.message || 'Server Error' });

    }
    catch (error){
        next(error);
    }
};
// Create a subscription -> middleware (check for renewal date) -> middleware (check forerrors) -> next -> controller

export default errorMiddleware;
