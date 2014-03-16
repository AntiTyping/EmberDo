Todos.ApplicationController = Ember.ArrayController.extend({
  keywords: '',

  actions: {
    clearKeywords: function() {
      this.set('keywords', '');
    }
  }
});

