#Techtonic Web App

> Slightly opinionated boilerplate and workflow for creating web applications

<div align="center">
<a href="https://travis-ci.org/jhwohlgemuth/mvc-webapp"><img src="https://travis-ci.org/jhwohlgemuth/techtonic-webapp.svg?branch=master"></img></a>
<a href="https://travis-ci.org/"><img src="../images/assets/images/travis.png"></img></a>
<a href="https://coveralls.io/r/jhwohlgemuth/mvc-webapp?branch=master"><img src="https://coveralls.io/repos/jhwohlgemuth/techtonic-webapp/badge.svg?branch=master"></img></a>
</div>

##Getting Started [![Join the chat at https://gitter.im/jhwohlgemuth/mvc-webapp](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/jhwohlgemuth/mvc-webapp?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)
- Download and install [Node.js](https://nodejs.org/download/) and [Git](https://git-scm.com/downloads)
- Clone this repo locally (or just [download the zip](https://github.com/jhwohlgemuth/techtonic-webapp/archive/master.zip))
```shell
    git clone https://github.com/jhwohlgemuth/techtonic-webapp.git
```
- Navigate to the root directory
```shell
    cd techtonic-webapp
```  
- Install the node modules needed for development
```shell
    npm install
```
- Write some code and [run some Grunt tasks](#grunt-tasks)
- Enforce code [standards](#jscs-rules-jshint-rules)

###Take it for a test drive
[![Deploy](https://www.herokucdn.com/deploy/button.png)](https://heroku.com/deploy)

##Technologies
| Task                  | Tool          |
| --------------------- | ------------- |
| dependency loading    | [RequireJS](./app/config.js) |
| models/collections    | [Backbone.js](http://backbonejs.org/) |
| views                 | [MarionetteJS](http://marionettejs.com/) |
| templates             | [Handlebars.js](http://handlebarsjs.com/) |
| task runner           | [Grunt](./Gruntfile.js)     |
| transpile CSS         | [grunt-contrib-less](https://github.com/gruntjs/grunt-contrib-less) |
| pre-compile templates | [grunt-contrib-handlebars](https://github.com/gruntjs/grunt-contrib-handlebars) |
| optimize JS           | [grunt-contrib-requirejs](https://github.com/gruntjs/grunt-contrib-requirejs) |
| test runner           | [Karma](./.config/karma.conf.js) with [PhantomJS](./package.json#L59) |
| test framework        | [Jasmine](./tests/jasmine/specs) and [Sinon.JS](http://sinonjs.org/) |
| code coverage         | [Istanbul](./package.json#L57) (using [Karma](./.config/karma.conf.js)) |
| code quality          | [JSHint](./.config/.jshintrc), [JSCS](./.config/.jscsrc), and [JSInspect](https://github.com/danielstjules/jsinspect) |
| code metrics          | [Plato](https://github.com/es-analysis/plato) |
| documentation         | [JSDocs](http://usejsdoc.org/) |

##Folder Structure [![Dependency Status](https://www.versioneye.com/user/projects/5599b71261663400220000c6/badge.svg?style=flat)](https://www.versioneye.com/user/projects/5599b71261663400220000c6)
    +- app
    |   +- models
    |   +- views
    |   +- controllers
    |   +- modules
    |   +- helpers
    |   +- shims
    |   |- app.js
    |   |- router.js
    |   |- main.js
    |   |- config.js
    |   \- index.html
    +- assets
    |   +- fonts
    |   +- images
    |   +- library
    |   +- templates
    |   +- less
    |       |- reset.less
    |       \- style.less
    +- config
    |   |- .csslintrc
    |   |- .jscsrc
    |   |- .jscsrc-jsdoc
    |   |- .jshintrc
    |   |- default.js
    |   \- karma.conf.js
    +- tasks
    |   |- build.js
    |   |- test.js
    |   \- main.js
    +- tests
    |   +- data
    |   +- jasmine
    |       +- specs
    |   \- test-main.js
    +- vault
    +- web
    |   |- server.js
    |   \- socket.js
    |- Vagrantfile
    |- GruntFile.js
    |- package.json
    |- app.json
    \- index.js
     
##Grunt Tasks
- ```grunt lint```
- ```grunt linting``` (watch task)
- ```grunt build``` (transpile LESS, pre-compile templates and optimize JS into one file)
- ```grunt test```
- ```grunt testing``` (watch task)
- ```grunt cover```
- ```grunt covering``` (watch task)
- ```grunt review``` (watch task)
- ```grunt quick-review``` (watch task) **[default task]**
- ```grunt inspect``` (detect copy-pasted and structurally similar code)
- ```grunt aria``` (lint HTML files for accessibility)
- ```grunt docs``` (generate documentation in ```./docs``` folder)
- ```grunt plato``` (generate plato report in ```./reports``` folder)
- Read [tasks/main.js](tasks/main.js) for all available tasks

##JSCS Rules ([JSHint rules](.config/.jshintrc))&nbsp;[![Codacy Badge](https://www.codacy.com/project/badge/ad62e9c79c2c4e4191da03109602c0c2)](https://www.codacy.com/app/jhwohlgemuth/mvc-webapp)
 - [Disallow Dangling Underscores](http://jscs.info/rule/disallowDanglingUnderscores.html)
 - [Disallow Empty Blocks](http://jscs.info/rule/disallowEmptyBlocks.html)
 - [Disallow Keywords: ("with")](http://jscs.info/rule/disallowKeywords.html)
 - [Disallow Keywords on New Line: ["else"]](http://jscs.info/rule/disallowKeywordsOnNewLine.html)
 - [Disallow Mixed Spaces and Tabs](http://jscs.info/rule/disallowMixedSpacesAndTabs.html)
 - [Disallow Multiple Line Breaks](http://jscs.info/rule/disallowMultipleLineBreaks.html)
 - [Disallow Multiple Line Strings](http://jscs.info/rule/disallowMultipleLineStrings.html)
 - [Disallow Multiple Variable Declarations](http://jscs.info/rule/disallowMultipleVarDecl.html)
 - [Disallow Space After Object Keys](http://jscs.info/rule/disallowSpaceAfterObjectKeys.html)
 - [Disallow Space After Prefix Unary Operators ("++", "--", "+", "-", "~", "!")](http://jscs.info/rule/disallowSpaceAfterPrefixUnaryOperators.html)
 - [Disallow Space Before Postfix Unary Operators: ("++", "--")](http://jscs.info/rule/disallowSpaceBeforePostfixUnaryOperators.html)
 - [Disallow Spaces in Anonymous Function Expressions](http://jscs.info/rule/disallowSpacesInAnonymousFunctionExpression.html)
 - [Disallow Spaces in Function Expressions Before Opening Round Braces](http://jscs.info/rule/disallowSpacesInFunctionDeclaration.html)
 - [Disallow Spaces in Named Function Expressions Before Opening Round Braces](http://jscs.info/rule/disallowSpacesInNamedFunctionExpression.html)
 - [Disallow Spaces Inside Array Brackets](http://jscs.info/rule/disallowSpacesInsideArrayBrackets.html)
 - [Disallow Spaces Inside Object Brackets](http://jscs.info/rule/disallowSpacesInsideObjectBrackets.html)
 - [Disallow Spaces Inside Parentheses](http://jscs.info/rule/disallowSpacesInsideParentheses.html)
 - [Disallow Trailing Commas](http://jscs.info/rule/disallowTrailingComma.html)
 - [Disallow Trailing Whitespaces](http://jscs.info/rule/disallowTrailingWhitespace.html)
 - [Disallow Yoda Conditions](http://jscs.info/rule/disallowYodaConditions.html)
 - [Maximum Line Length (150)](http://jscs.info/rule/maximumLineLength.html)
 - [Require Camel Case or Upper Case Identifiers](http://jscs.info/rule/requireCamelCaseOrUpperCaseIdentifiers.html)
 - [Require Capitalized Constructors](http://jscs.info/rule/requireCapitalizedConstructors.html)
 - [Require Commas Before Line Breaks](http://jscs.info/rule/requireCommaBeforeLineBreak.html)
 - [Require Curly Braces ("else", "for", "while", "do", "try", "catch")](http://jscs.info/rule/requireCurlyBraces.html)
 - [Require Space After Keywords ("if", "else", "for", "while", "do", "switch", "return", "try", "catch")](http://jscs.info/rule/requireSpaceAfterKeywords.html)
 - [Require Space Before Binary Operators ("+", "-", "/", "*", "=", "==", "===", "!=", "!==")](http://jscs.info/rule/requireSpaceAfterBinaryOperators.html)
 - [Require Space Before Block Statements](http://jscs.info/rule/requireSpaceBeforeBlockStatements.html)
 - [Validate Indentation (4)](http://jscs.info/rule/validateIndentation.html)
 - [Validate Line Breaks ("CRLF")](http://jscs.info/rule/validateLineBreaks.html)
 - [Validate Quote Marks (Use single quotes)](http://jscs.info/rule/validateQuoteMarks.html)

#Alternatives
- See wiki page, [Tools for Creating Web Apps](https://github.com/jhwohlgemuth/techtonic/wiki/Tools-for-Creating-Web-Apps)

#References & Resources
- See wiki page, [References & Resources](https://github.com/jhwohlgemuth/techtonic/wiki/References-&-Resources)

#Future
- See [mvc-webapp Trello board](https://trello.com/b/KjS1Fp2I/mvc-webapp)