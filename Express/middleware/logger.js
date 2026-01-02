const logger = (req, res, next) => {
    console.log(req.method, req.url);
    next();
}
// Middleware function to log HTTP method and URL of incoming requests
export default logger;