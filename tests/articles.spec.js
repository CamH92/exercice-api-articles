// CREATION DE TESTS MEME SI LE RESTE DU CODE DU PROJET NE FONCTIONNE PAS

const request = require("supertest");
const { app } = require("../server");
const config = require("../config");
const mongoose = require("mongoose");
const mockingoose = require("mockingoose");
const User = require("../api/users/users.model");
const usersService = require("../api/users/users.service");


//création de data test
const MOCK_DATA_CREATED = {
    title: "title test",
    content: "article test",
  };

// méthode de test de création d'un article
    test("[Articles] Create Article", async () => {
        const res = await request(app)
          .post("/api/articles")
          .send(MOCK_DATA_CREATED)
        expect(res.status).toBe(201);
        expect(res.body.title).toBe(MOCK_DATA_CREATED.title);
        expect(res.body.content).toBe(MOCK_DATA_CREATED.content);

      });

// méthode de test de mise à jour d'un article

      test("[Articles] Update Article", async () => {
        const articleId = "1234";
        const updatedData = {
          title: "title update test",
          content: "article update test",
        };
        const res = await request(app)      
            .put(`/api/articles/${articleId}`)
            .send(updatedData)    
          expect(res.status).toBe(200);
          expect(res.body.title).toBe(updatedData.title);
          expect(res.body.content).toBe(updatedData.content);
        });


//méthode de test de suppression d'un article

test("[Articles] Delete Article", async () => {
      const articleId = "1234";
      const res = await request(app)
        .delete(`/api/articles/${articleId}`);
      expect(res.status).toBe(200);
    });

 


   