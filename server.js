try {
  require("./index");
} catch (error) {
  console.log({ error });
  throw Error;
}
