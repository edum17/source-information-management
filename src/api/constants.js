export const METHODS = {
  POST: Symbol("post"),
  GET: Symbol("get"),
  PUT: Symbol("put"),
  DELETE: Symbol("delete"),
};

export default Object.freeze({
  ENDPOINT: Object.freeze({
    NUNS: Object.freeze({
      ALL: "http://localhost:8000/nuns/",
      METHOD: METHODS.GET,
    }),
    NUN_UPDATE: Object.freeze({
      ALL: "http://localhost:8000/update/",
      METHOD: METHODS.POST,
    }),
    NUN_CREATE: Object.freeze({
      ALL: "http://localhost:8000/create/",
      METHOD: METHODS.POST,
    }),
  }),
});
