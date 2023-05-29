
class Article {
   constructor(id, auteurId, titre, image, informations) {
      this.id = id;
      this.auteurId = auteurId;
      this.titre = titre;
      this.image = image;
      this.informations = informations;
   }

   static fromObject(article) {
      const {id, auteur_id, titre, image, informations} = article;
      var ret = new Article(id, auteur_id, titre, image, informations);
      ret.auteur = article.auteur;
      return ret;
   }

   canEdit(user) {
      return user !== null && (
         (user.role === 'admin') ||
      (this.auteurId === user.id)
      );
   }
}

module.exports = Article;
