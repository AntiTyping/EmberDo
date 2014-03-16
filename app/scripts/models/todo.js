Todos.Todo = DS.Model.extend({
  name: DS.attr("string"),
  priority: DS.attr("string")
});

Todos.Todo.FIXTURES = [
  {id: 1, name: "Hight priority task", priority: "high"},
  {id: 2, name: "Medium priority task", priority: "medium"},
  {id: 3, name: "Low priority task", priority: "low"}
];

