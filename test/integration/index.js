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
        fillIn('.task-priority', "medium");
        click('button.js-add');
      });

      it("should add it to the list", function() {
        andThen(function() {
          expect($('tr.task:last').text()).to.match(/New task/);
          expect($('tr.task')).to.have.length(4);
        });
      });

      it("should set priority", function() {
        expect($("span.priority:last").text()).to.match(/medium/);
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

  describe("Filter by priority", function() {
    describe("when high priority is selected", function() {
      it("should display only high priority tasks", function() {
        $("a.priority:contains('High')").click();
        expect($('tr.task')).to.have.length(1);
      });
    });

    describe("when medium priority is selected", function() {
      it("should display only medium priority tasks", function() {
        $("a.priority:contains('Medium')").click();
        expect($('tr.task')).to.have.length(1);
      });
    });

    describe("when low priority is selected", function() {
      it("should display only medium priority tasks", function() {
        $("a.priority:contains('Low')").click();
        expect($('tr.task')).to.have.length(1);
      });
    });

    describe("when no priority is selected", function() {
      it("should display all tasks", function() {
        $("a.priority:contains('All')").click();
        expect($('tr.task')).to.have.length(3);
      });
    });
  });
});
