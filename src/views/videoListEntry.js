var VideoListEntryView = Backbone.View.extend({
 
  initialize: function() {
   // this.render(); 
  },

  render: function() {
    this.$el.html(this.template());
    this.$el.find('.media-object').attr('src', this.model.attributes.thumbnail);
    this.$el.find('.video-list-entry-title').text(this.model.attributes.title);
    this.$el.find('.video-list-entry-detail').text(this.model.attributes.description);
    return this.$el;
  },

  template: templateURL('src/templates/videoListEntry.html')

});
