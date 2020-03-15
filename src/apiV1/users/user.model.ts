import Debug from "debug";
import * as mongoose from "mongoose";
import Cache from "../../config/cache";

const debug = Debug("app:user")
const Schema = mongoose.Schema;
const Collection = "User";
const CacheCollection = mongoose.pluralize()(Collection);

const UserSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true
    },
    lastName: {
      type: String,
      required: true
    },
    email: {
      type: String,
      unique: true,
      match: /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/,
      required: true,
      trim: true
    },
    password: {
      type: String,
      required: true,
      trim: true
    }
  },
  {
    timestamps: true,
    useNestedStrict: true
  }
);

UserSchema.post('save', (user) => {
  debug('%s has been saved', user._id);
  Cache.getClient().hset(CacheCollection, user._id, JSON.stringify(user));
});

UserSchema.post("remove", (user) => {
  debug('%s has been removed', user._id);
  Cache.getClient().hdel(CacheCollection, user._id);
});

export default mongoose.model(Collection, UserSchema);
