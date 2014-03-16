describe('Scenarios:', function() {
  beforeEach(function() {
    Todos.Todo.FIXTURES = [
      {id: 1, name: "Hight priority task", priority: "high"},
      {id: 2, name: "Medium priority task", priority: "medium"},
      {id: 3, name: "Low priority task", priority: "low"}
    ];
    Todos.reset();
    visit('/');
  });

  describe("Task List", function() {
    it('should display list of tasks', function() {
      expect($('tr.task')).to.have.length(3);
    });
  });

  describe("Add a new task", function() {
    describe("when the new task is valid", function() {
      beforeEach(function() {
        Todos.reset();
        visit('/');
        fillIn('.task-name', "New task");
        click('button.js-add');
      });

      it("should add it to the list", function() {
        andThen(function() {
          expect($('tr.task:last').text()).to.match(/New task/);
          expect($('tr.task')).to.have.length(4);
        });
      });

      it('should clear the new task box', function() {
        expect($('.task-name').val()).to.equal('');
      });

      it("should not display an error message", function() {
        expect($('div.alert').hasClass('hide')).to.be.true;
      });
    });

    describe("when the new task is invalid", function() {
      beforeEach(function() {
        Todos.reset();
        visit('/');
        fillIn('.task-name', "");
        click('button.js-add');
      });

      it("should leave the task list unchanged", function() {
        expect($('tr.task')).to.have.length(3);
      });

      it("should display an error message", function() {
        expect($('div.alert').hasClass('hide')).to.be.false;
      });
    });
  });

  describe("Mark task as done", function() {
    it("should remove the task from the task list", function() {
      $('button.js-done:last').click();
      expect($('tr.task')).to.have.length(2);
    });
  });
});
