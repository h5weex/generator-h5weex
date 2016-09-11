'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');
var utils = require('./util.js');
var chalk = require('chalk');

var Generator = module.exports = function Generator() {
  yeoman.generators.NamedBase.apply(this, arguments);

  this.appname = path.basename(process.cwd());
  this.scriptAppName = this._.camelize(this.appname) + utils.appName(this);

  this.name = this.name.replace('.html', '');
  this.cameledName = this._.camelize(this.name);
  this.classedName = this._.classify(this.name);

  var sourceRoot = '/templates';

  this.sourceRoot(path.join(__dirname, sourceRoot));

};

util.inherits(Generator, yeoman.generators.NamedBase);

Generator.prototype.appTemplate = function (src, dest) {
  yeoman.generators.Base.prototype.template.apply(this, [
    src,
    path.join('./', dest.toLowerCase())
  ]);
};
