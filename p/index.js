'use strict';
var fs = require('fs');
var path = require('path');
var util = require('util');
var ScriptBase = require('../script-base.js');
var utils = require('../util.js');

var Generator = module.exports = function Generator() {
  ScriptBase.apply(this, arguments);
  this.name = (this.name).toLowerCase();
  this.name = (this.name).replace('.html','');
  this.pageName = this.name;
};

util.inherits(Generator, ScriptBase);

Generator.prototype.createPageFiles = function createPageFiles() {

  this.appTemplate(
    'page.we',
    path.join('src', 'p', this.name + '.we')
  );

};
