const unroll = require("./unroll");

describe("#unroll", function () {

  it("is a function", function () {
    expect(typeof unroll).toEqual("function");
  });

  test("square", function (){
    const square = [
      [1, 2, 3, 4],
      [5, 6, 7, 8],
      [9, 10, 11, 12],
      [13, 14, 15, 16]
    ];
    const output = [1, 2, 3, 4, 8, 12, 16, 15, 14, 13, 9, 5, 6, 7, 11, 10];
    expect(unroll(square)).toEqual(output);
  });

  test("smaller square", function (){
    const smallerSquare = [
      ["a", "b", "c"],
      ["d", "e", "f"],
      ["g", "h", "i"]
    ];
    const output = ["a", "b", "c", "f", "i", "h", "g", "d", "e"];
    expect(unroll(smallerSquare)).toEqual(output);
  });
});
