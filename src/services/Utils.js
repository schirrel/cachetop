export default class Utils {
   static uniqueId () {
    return '_' + Math.random().toString(36).substr(2, 9);
 }
}