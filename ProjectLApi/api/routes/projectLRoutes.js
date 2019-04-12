'use strict';
module.exports = function(app) {
  var card = require('../controllers/cardController');

  // todoList Routes
  app.route('/cards')
    .get(card.list_all_cards)
    .post(card.create_a_card);


  app.route('/cards/:cardId')
    .get(card.read_a_card)
    .put(card.update_a_card)
    .delete(card.delete_a_card);
};
