const app = require("./test-index");

try {
  const PORT = 3000;
  app.listen(PORT, () =>
    console.log(`Server running on http://localhost:${PORT}`)
  );
} catch (error) {
  console.log({ error });
}
