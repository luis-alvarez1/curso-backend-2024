import { Redis } from "ioredis";
const redis = new Redis({
    port: 6379,
    host: "redis",
});

export default redis;
