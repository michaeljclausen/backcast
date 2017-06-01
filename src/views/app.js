var AppView = Backbone.View.extend({

  el: '#app',

  initialize: function() {
    this.render();
    this.collection = new Videos(exampleVideoData);
    this.videoListView = new VideoListView({
      collection: this.collection
    });
    this.videoPlayerView = new VideoPlayerView({
      model: this.collection.models[0]
    });
    this.searchView = new SearchView({
      collection: this.collection
    });
  },


  render: function() {
    this.$el.html(this.template());
    
    return this;
  },

  template: templateURL('src/templates/app.html')

});
