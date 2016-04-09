var assert = chai.assert;

// test maze
var maze =  [
  [ '#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#' ],
  [ '#', '.', '.', '.', '#', '.', '.', '.', '.', '.', '.', '#' ],
  [ '.', '.', '#', '.', '#', '.', '#', '#', '#', '#', '.', '#' ],
  [ '#', '#', '#', '.', '#', '.', '.', '.', '.', '#', '.', '#' ],
  [ '#', '.', '.', '.', '.', '.', '#', '#', '.', '#', '.', '.' ],
  [ '#', '#', '#', '#', '#', '#', '.', '#', '.', '#', '.', '#' ],
  [ '#', '.', '.', '#', '.', '#', '.', '#', '.', '#', '.', '#' ],
  [ '#', '#', '.', '#', '.', '#', '.', '#', '.', '#', '.', '#' ],
  [ '#', '.', '.', '.', '.', '.', '.', '.', '.', '#', '.', '#' ],
  [ '#', '#', '#', '#', '#', '.', '#', '#', '#', '#', '.', '#' ],
  [ '#', '.', '.', '.', '.', '.', '.', '.', '#', '.', '.', '#' ],
  [ '#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#' ],
];

describe('Turning', function() {
  describe('turnRight', function() {
    it('should return "East" when forward is "North"', function() {
      var direction = ["North", "East", "South", "West"];
      assert.deepEqual(['East', 1], turnRight(direction, 0));
    });
  });
  describe('turnLeft', function() {
    it('should return "West" when forward is "North"', function() {
      var direction = ["North", "East", "South", "West"];
      assert.deepEqual(['West', 3], turnLeft(direction, 0));
    });
  });
});

describe('Looking', function() {
  describe('lookRight', function() {
    it('should return "#" when forward is "East" at Point(2, 1)', function() {
      assert.equal("#", lookRight(maze, 'East', new Point(2, 1)));
    });
  });
  describe('lookForward', function() {
    it('should return "." when forward is "East" at Point(2, 1)', function() {
      assert.equal(".", lookForward(maze, 'East', new Point(2, 1)));
    });
  });
  describe('lookLeft', function() {
    it('should return "." when forward is "East" at Point(2, 1)', function() {
      assert.equal("#", lookLeft(maze, 'East', new Point(2, 1)));
    });
  });
});

describe('moveForward', function() {
  it('should return Point(2, 1) when forward is "North" at Point(2, 2)', function() {
    assert.deepEqual(new Point(2, 1), moveForward(maze, 'North', new Point(2, 2)));
  });
});

describe('isExit', function() {
  it('should return false when forward is "West" at Point(5, 5)', function() {
    assert.equal(false, isExit('West', new Point(5, 5)));
  });
  it('should return true when forward is "East" at Point(11, 0)', function() {
    assert.equal(true, isExit('East', new Point(11, 0)));
  });
  it('should return false when forward is "West" at Point(11, 0)', function() {
    assert.equal(false, isExit('West', new Point(11, 0)));
  });
});