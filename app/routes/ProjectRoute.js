module.exports = App.ProjectRoute = Ember.Route.extend({
  model: function (params) {
    return this.store.find('project', params.id);
  }
});
