Todos.TodosRoute = Ember.Route.extend({
  model: function() {
    return this.store.find('todo');
  }
});

Todos.TodosIndexRoute = Ember.Route.extend({
  model: function() {
    return this.store.find('todo');
  }
});

Todos.TodosPriorityRoute = Ember.Route.extend({
  controllerName: 'TodosIndex',

  renderTemplate: function(controller) {
    this.render('todos/index', {controller: controller});
  },

  filterByPriority: function(priority) {
    return this.store.filter('todo', function(todo) {
      return todo.get('priority') == priority;
    });
  }
});

Todos.TodosHighRoute = Todos.TodosPriorityRoute.extend({
  model: function() { return this.filterByPriority('high'); },
});

Todos.TodosMediumRoute = Todos.TodosPriorityRoute.extend({
  model: function() { return this.filterByPriority('medium'); },
});

Todos.TodosLowRoute = Todos.TodosPriorityRoute.extend({
  model: function() { return this.filterByPriority('low'); },
});


