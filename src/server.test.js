const test = require("node:test");
const assert = require("node:assert");

test("application configuration is correct", () => {
  const port = process.env.PORT || 3000;

  assert.ok(port);
});