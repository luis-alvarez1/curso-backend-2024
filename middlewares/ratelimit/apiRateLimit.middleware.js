// import redis from "../../config/redis";

// const ApiRateLimit = async (req, res, next) => {
//     const ip = req.headers["x-forwarded-for"] || req.connection.remoteAddress;

//     const limit = 3; // 3 request a los 3 segundos

//     await redis.incr(ip);
//     await redis.expire(ip, 3);
//     const value = await redis.get(ip);

//     if (+value >= limit) {
//         return res.status(429).json({ message: "Too many request" });
//     }

//     next();
// };

// export default ApiRateLimit;
