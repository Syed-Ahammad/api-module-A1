const express = require("express");
const usersController =require('../../controllers/user.controller.js')

const router = express.Router();

router.route("/random"). /**
* @api {get} /tools All tools
* @apiDescription Get all the tools
* @apiPermission admin
*
* @apiHeader {String} Authorization   User's access token
*
* @apiParam  {Number{1-}}         [page=1]     List page
* @apiParam  {Number{1-100}}      [limit=10]  Users per page
*
* @apiSuccess {Object[]} all the tools.
*
* @apiError (Unauthorized 401)  Unauthorized  Only authenticated users can access the data
* @apiError (Forbidden 403)     Forbidden     Only admins can access the data
*/
get(usersController.getRandomUser)

router.route("/"). /**
* @api {get} /tools All tools
* @apiDescription Get all the tools
* @apiPermission admin
*
* @apiHeader {String} Authorization   User's access token
*
* @apiParam  {Number{1-}}         [page=1]     List page
* @apiParam  {Number{1-100}}      [limit=10]  Users per page
*
* @apiSuccess {Object[]} all the tools.
*
* @apiError (Unauthorized 401)  Unauthorized  Only authenticated users can access the data
* @apiError (Forbidden 403)     Forbidden     Only admins can access the data
*/
get(usersController.getAllUser).
/**
* @api {get} /tools All tools
* @apiDescription Get all the tools
* @apiPermission admin
*
* @apiHeader {String} Authorization   User's access token
*
* @apiParam  {Number{1-}}         [page=1]     List page
* @apiParam  {Number{1-100}}      [limit=10]  Users per page
*
* @apiSuccess {Object[]} all the tools.
*
* @apiError (Unauthorized 401)  Unauthorized  Only authenticated users can access the data
* @apiError (Forbidden 403)     Forbidden     Only admins can access the data
*/
post(usersController.saveUser)


router.route('/:id').get(usersController.getLimitUser)


module.exports = router