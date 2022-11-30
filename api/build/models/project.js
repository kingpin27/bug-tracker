"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var schema = new mongoose_1.Schema({
    name: String,
    description: String,
    tags: (Array),
    admin: mongoose_1.Types.ObjectId
});
var ProjectModel = (0, mongoose_1.model)('Project', schema);
exports.default = ProjectModel;
