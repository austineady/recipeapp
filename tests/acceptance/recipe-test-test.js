import Ember from 'ember';
import { module, test } from 'qunit';
import startApp from 'recipeapp/tests/helpers/start-app';

var application;

module('Acceptance | recipe test', {
  beforeEach: function() {
    application = startApp();
  },

  afterEach: function() {
    Ember.run(application, 'destroy');
  }
});

test('visiting index', function(assert) {
  visit('/');

  andThen(function() {
    assert.equal(find('.ingredient').length, 13);
  });
});
