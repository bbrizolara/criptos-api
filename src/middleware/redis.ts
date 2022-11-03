import Redis from "ioredis";
import { REDIS_TIME_OUT } from "src/config";
import { promisify } from "util";

export const redisClient = new Redis("redis://default:redispw@localhost:49153");

export const getRedis = (value: string) => {
  const syncRedisGet = promisify(redisClient.get).bind(redisClient);
  return syncRedisGet(value);
};

export const setRedis = (key: string, value: string) => {
  const syncRedisSet = promisify(redisClient.setex).bind(redisClient);
  let timeOut = REDIS_TIME_OUT;
  if (!timeOut) {
    timeOut = "60";
  }
  return syncRedisSet(key, parseInt(timeOut), value);
};
