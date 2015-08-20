/**
 * @file Table Row model and collection
 * @author Jason Wohlgemuth
 * @module models/TableRow
 */
define(function(require, exports) {
    'use strict';

    var Backbone = require('backbone');

    var RowModel = Backbone.Model.extend();
    var RowCollection = Backbone.Collection.extend({
        model:      RowModel,
        comparator: 'index'
    });
    exports.model      = RowModel;
    exports.collection = RowCollection;
});