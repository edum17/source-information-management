export const METHODS = {
  POST: Symbol("post"),
  GET: Symbol("get"),
  PUT: Symbol("put"),
  DELETE: Symbol("delete"),
};

export default Object.freeze({
  ENDPOINT: Object.freeze({
    NUNS: Object.freeze({
      ALL: "http://localhost:5000/nuns/",
      METHOD: METHODS.GET,
    }),
  }),
});
