//

export function dirname(path) {
  let [root, dir] = splitPath(path);

  if (!root && !dir) {
    return '.';
  }

  if (dir) {
    dir = dir.substr(0, dir.length - 1);
  }

  return root + dir;
};

////

// Split a filename into [root, dir, basename, ext], unix version
// 'root' is just a slash, or nothing.
var splitPathRe =
  /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/;

function splitPath(filename) {
  return splitPathRe.exec(filename).slice(1);
};
