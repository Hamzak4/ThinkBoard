import {Ratelimit} from "@upstash/ratelimit"
import {Redis} from "@upstash/redis"
import rateLimiter from "../middleware/rateLimiter.js"
import dotenv, { config } from "dotenv"

dotenv.config();

const ratelimit=new Ratelimit({
    redis: Redis.fromEnv(),
    limiter:Ratelimit.slidingWindow(10,"20 s")
})
export default ratelimit;