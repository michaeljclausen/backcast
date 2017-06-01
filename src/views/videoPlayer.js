var VideoPlayerView = Backbone.View.extend({

  el: '.player',

  initialize: function() {
    this.render();
  },

  render: function() {
    this.$el.html('<div class="loading">Please wait...</div>');
    this.$el.html(this.template());
    this.$el.find('.embed-responsive-item').attr('src', 'https://www.youtube.com/embed/' + this.model.get('id'));
    this.$el.find('.video-player-details h3').text(this.model.get('title'));
    this.$el.find('.video-player-details div').text(this.model.get('description'));
    return this;
  },

  template: templateURL('src/templates/videoPlayer.html')

});
