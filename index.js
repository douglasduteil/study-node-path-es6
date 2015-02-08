//
// Sources inspired by https://github.com/joyent/node/blob/v0.12.0/lib/path.js

export function dirname(path) {
  let [root, dir] = splitPath(path);

  if (!root && !dir) {
    // No dirname whatsoever
    return '.';
  }

  if (dir) {
    // It has a dirname, strip trailing slash
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
