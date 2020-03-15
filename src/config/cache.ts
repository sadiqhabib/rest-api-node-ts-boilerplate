import Debug from "debug";
import * as IORedis from 'ioredis';

import CONFIG from './config';

const debug = Debug(`app:cache`)


class Cache {
  private client: IORedis.Redis;
  constructor() {
    const { CACHE_HOST, CACHE_PORT, CACHE_PASSWORD } = CONFIG;
    this.client = new IORedis({
      host: CACHE_HOST, // Redis host
      port: CACHE_PORT, // Redis port
      family: 4, // 4 (IPv4) or 6 (IPv6)
      password: CACHE_PASSWORD,
      db: 0
    });
    // listen for requests
    debug('The Cache Conected to %O', CONFIG.NAME);
  }
  /**
   * @todo getHash, getSet etc
   */
  public getClient(): IORedis.Redis { return this.client; }
}

export default new Cache();

// export default (async () => {
//   try {
//     return new Redis({
//       port: 6379, // Redis port
//       host: "127.0.0.1", // Redis host
//       family: 4, // 4 (IPv4) or 6 (IPv6)
//       // password: "auth",
//       db: 0
//     });
//     // await mongoose.connect(
//     //   CONFIG.DB_HOST,
//     //   { useNewUrlParser: true }
//     // );
//     // listen for requests
//     // console.log('The Cache Conection is Ok');
//   } catch (err) {
//     console.log(`${err} Could not Connect to the Database. Exiting Now...`);
//     process.exit();
//   }
// })();