const LEVELS = exports.levels = {
  ERROR: 3,
  WARN: 4,
  NOTICE: 5,
  INFO: 6,
  LOG: 7,
  DEBUG: 7, // compat
  TRACE: 7, // compat
};

var level = LEVELS.LOG;

/**
 * Compatible with journald (indicates log levels with brackets).
 */

function error (...args) {
  if (level > LEVELS.ERROR) return;
	console.error('<3>', ...args);
};
 
function warn (...args) {
  if (level > LEVELS.WARN) return;
	console.warn('<4>', ...args);
};

function info (...args) {
  if (level > LEVELS.INFO) return;
	console.info('<6>', ...args);
};

function log (...args) {
  if (level > LEVELS.LOG) return;
	console.log('<7>', ...args);
};

exports.warn = warn;
exports.error = error;
exports.info = info;
exports.log = log;
exports.debug = log; // compat
exports.trace = log; // compat

exports.setLevel = function (_level) {
  level = _level;
};
