const UnauthorizedError = require("../../errors/unauthorized");
const articlesService = require("./articles.service");
const authMiddleware = require("./auth");
const User = require("../users/users.model");

class ArticlesController {

    async create(req, res, next) {
        try {
            const article = await articlesService.create({
                ...req.body,
                user: req.user.id,
            });
            req.io.emit("article:create", article);
            res.status(201).json(article);
        }
        catch (err) {
            next(err)
        }
    }

    async update(req, res, next) {
        const userRole = req.params.userRole;
        if (userRole !== "admin") {
            throw new UnauthorizedError();
        }
        try {
            const id = req.params.id
            const data = req.body
            const articleModified = await articlesService.update(id, data)
            req.io.emit("article:update", article)
            res.json(articleModified)
        }
        catch (err) {
            next(err)
        }

    }

    async delete(req, res, next) {
        const userRole = req.params.userRole;
        if (userRole !== "admin") {
            throw new UnauthorizedError();
        }
        try {
            const id = req.params.id
            await articlesService.delete(id)
            req.io.emit("article:delete", article)
            res.status(204).send();
        }
        catch (err) {
            next(err)
        }
    }


    async getUserArticles(req, res, next) {
        try {
            const userId = req.params.userId;
            const articles = await articlesService.getUserArticles(userId);
            res.json(articles);
        } catch (err) {
            next(err);
        }
    }

  }



module.exports = new ArticlesController(); 