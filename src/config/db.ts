import Debug from "debug";
import * as mongoose from 'mongoose';
import CONFIG from './config';

const debug = Debug(`app:db`)

mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);
mongoose.set('useFindAndModify', false);

// Connecting to the database
export default (async () => {
  try {
    debug('DB Conecting at %O', CONFIG.DB_HOST);
    await mongoose.connect(
      CONFIG.DB_HOST,
      { useNewUrlParser: true }
    );
    // listen for requests
    debug('The DB Conection is Ok');
  } catch (err) {
    console.log(`${err} Could not Connect to the Database. Exiting Now...`);
    process.exit();
  }
})();
