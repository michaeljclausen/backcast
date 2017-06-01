var VideoListEntryView = Backbone.View.extend({
 
  initialize: function() {
   // this.render(); 
  },

  render: function() {
    this.$el.html(this.template());

    this.$el.find('.media-object').attr('src', this.model.attributes.thumbnail);
    this.$el.find('.media-object').on('click', el => {
      //console.log(this);
      //var newVideoToBePlayed = new VideoPlayerView({model: this.model});
      this.model.select();
    });

    this.$el.find('.video-list-entry-title').text(this.model.attributes.title);
    this.$el.find('.video-list-entry-title').on('click', el => {
      //var newVideoToBePlayed = new VideoPlayerView({model: this.model});  
    });
    this.$el.find('.video-list-entry-detail').text(this.model.attributes.description);
    return this.$el;
  },

  template: templateURL('src/templates/videoListEntry.html')

});
