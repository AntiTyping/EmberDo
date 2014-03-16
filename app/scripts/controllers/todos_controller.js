Todos.TodosController = Ember.ArrayController.extend({
  actions: {
    createTodo: function() {
      var name = this.get('newName');

      if (!name.trim() || name.length < 3) {
        $('#validation').removeClass('hide');
        return;
      } else {
        $('#validation').addClass('hide');
      };

      var todo = this.store.createRecord('todo', {
        name: name
      });
      this.set('newName', '');

      todo.save();
    }
  }
});

