import * as i18n from "i18n";
import { resolve } from "path";

i18n.configure({
  locales: ['en', 'de', 'ar'],
  // register: funkyObject,
  directory: resolve(__dirname + '../../locales')
});
export default i18n;