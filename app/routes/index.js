import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return [
      {serving: '1', measure: 'pound', ingredient: 'skinless, boneless chicken breast halves - cubed'},
      {serving: '1', measure: 'cup', ingredient: 'sliced carrots'},
      {serving: '1', measure: 'cup', ingredient: 'frozen green peas'},
      {serving: '.50', measure: 'cup', ingredient: 'sliced celery'},
      {serving: '.333', measure: 'cup', ingredient: 'butter'},
      {serving: '.333', measure: 'cup', ingredient: 'chopped onion'},
      {serving: '.333', measure: 'cup', ingredient: 'all-purpose flour'},
      {serving: '.50', measure: 'teaspoon', ingredient: 'salt'},
      {serving: '.25', measure: 'teaspoon', ingredient: 'black pepper'},
      {serving: '.25', measure: 'teaspoon', ingredient: 'celery seed'},
      {serving: '1.75', measure: 'cup', ingredient: 'chicken broth'},
      {serving: '.667', measure: 'cup', ingredient: 'milk'},
      {serving: '2 (9 inch)', measure: '', ingredient: 'unbaked pie crusts'}
    ];
  }
});
