const express = require('express');
const asyncHandler = require('express-async-handler');

const { Project } = require('../../db/models');

const router = express.Router();

router.get("/", asyncHandler(async (req, res) => {
    const projects = await Project.findAll({
        order: [['id', 'ASC']]
    });
    return res.json(projects);
}))

router.get("/:id", asyncHandler(async (req, res) => {
    const projectId = parseInt(req.params.id, 10);

    const project = await Project.findOne({
        where: { id: projectId }
    })
    return res.json(project);
}))

router.get("/:id/support", asyncHandler(async (req, res) => {
    const projectId = parseInt(req.params.id, 10);

    const project = await Project.findOne({
        where: { id: projectId }
    })
    return res.json(project);
}))

module.exports = router;
