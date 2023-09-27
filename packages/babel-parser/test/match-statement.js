import { parse } from "../lib/index.js";

function getParser(code) {
  return () => parse(code, { sourceType: "module" });
}

describe("match syntax", function () {
  it("should parse as expression", function () {
    expect(
      getParser(`
        const test = match(user){
        when({ role: "admin"}): "hi admin";
        when({ role: "user"}): "hi user";
        default: "hi stranger";
      }`)(),
    ).toMatchSnapshot();
  });

  it("should parse as statement", function () {
    expect(
      getParser(`
        match(user){
        when({ role: "admin"}): "hi admin";
        when({ role: "user"}): "hi user";
        default: "hi stranger";
      }`)(),
    ).toMatchSnapshot();
  });
});
