window.Todos = Ember.Application.create({
  LOG_TRANSITIONS: true,
  LOG_TRANSITIONS_INTERNAL: true
});

require('scripts/store');
require('scripts/routes/*');
require('scripts/models/*');
require('scripts/route');
