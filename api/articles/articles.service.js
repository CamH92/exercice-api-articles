const Article = require('./articles.model');

class ArticleService {
//création des trois méthodes create, update, delete à partir du modèle articles.model 
    create(data) {
        const article = new Article(data); 
        return article.save();
    }
    update(id, data) {
        return Article.findByIdAndUpdate(id, data, {new: true}); 
    }
    delete(id) {
        return Article.deleteOne({_id: id})
    }


// création de méthode de récupération de l'article avec le userID à partir du modèle avec utilisation de la méthode populate
    async getUserArticles(userId) {
        try {
          const articles = await Article.find({ user: userId })
            .populate({
              path: "user",
              select: "-password",
            })          
    
          return articles;
        } catch (err) {
          throw err;
        }
      }
}


module.exports = new ArticleService();



