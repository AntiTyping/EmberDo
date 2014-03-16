Todos.TodosController = Ember.ArrayController.extend({

  priorities: ["high", "medium", "low"],

  actions: {
    createTodo: function() {
      var name = this.get('newName');
      var priority = this.get('priority');

      if (!name.trim() || name.length < 3) {
        $('#validation').removeClass('hide');
        return;
      } else {
        $('#validation').addClass('hide');
      };
      var todo = this.store.createRecord('todo', {
        name: name,
        priority: priority
      });
      this.set('newName', '');
      todo.save();
    }
  }
});

Todos.TodosIndexController = Ember.ArrayController.extend({
  todoCount: function() {
    return this.get('length');
  }.property('@each.name'),

  inflection: function() {
    var count = this.get('todoCount');
    if (count == 1) {
      return "task";
    };
    return "tasks";
  }.property('todoCount'),
});

