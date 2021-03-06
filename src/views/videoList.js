var VideoListView = Backbone.View.extend({

  el: '.list',
  
  initialize: function() {
    this.render();
    
  },
  
  render: function() {
    this.$el.children().detach();
    this.$el.html(this.template());
    this.collection.forEach(video => {
      console.log(video);
      var videoListEntryView = new VideoListEntryView({ model: video });
      this.$('.video-list').append(videoListEntryView.render());
    });
    return this.$el;
  },

  template: templateURL('src/templates/videoList.html')

});
