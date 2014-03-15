describe('Scenarios:', function() {
  beforeEach(function() {
      Todos.reset();
      visit('/');
  });

  describe("Task List", function() {
    it('should display list of tasks', function() {
      expect($('tr.task')).to.have.length(3);
    });
  });
});
