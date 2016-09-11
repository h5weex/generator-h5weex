'use strict';
var fs = require('fs');
var path = require('path');
var util = require('util');
var ScriptBase = require('../script-base.js');
var utils = require('../util.js');

var Generator = module.exports = function Generator() {
  ScriptBase.apply(this, arguments);
  this.name = (this.name).toLowerCase();
  this.compName = this.name;
};

util.inherits(Generator, ScriptBase);

Generator.prototype.createPageFiles = function createPageFiles() {

  this.appTemplate(
    'comp.we',
    path.join('src', 'c', this.name + '.we')
  );

};
