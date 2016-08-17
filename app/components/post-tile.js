import Ember from 'ember';

export default Ember.Component.extend({
  isContentShowing: false,
  actions: {
    showContent: function() {
      this.set('isContentShowing', true);
    },
    hideContent: function() {
      this.set('isContentShowing', false);
    },
    delete(post) {
      if (confirm('Are you sure you want to delete this post?')) {
        this.sendAction('destroyPost', post);
      }
    }
    
  }
});
