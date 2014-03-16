Todos.TodosIndexRoute = Ember.Route.extend({
  model: function() {
    return this.store.find('todo');
  }
});

Todos.TodosPriorityRoute = Ember.Route.extend({
  controllerName: 'Todos',

  renderTemplate: function(controller) {
    this.render('todos/index', {controller: controller});
  },

  filterByPriority: function(priority) {
    console.log("filtere", priority);
    return this.store.filter('todo', function(todo) {
      return todo.get('priority') == priority;
    });
  }
});

Todos.TodosHighRoute = Todos.TodosPriorityRoute.extend({
  model: function() { return this.filterByPriority('high'); },
});

Todos.TodosMediumRoute = Todos.TodosPriorityRoute.extend({
  model: function() { console.log("medium"); return this.filterByPriority('medium'); },
});

Todos.TodosLowRoute = Todos.TodosPriorityRoute.extend({
  model: function() { return this.filterByPriority('low'); },
});


