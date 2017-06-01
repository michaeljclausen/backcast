var VideoListEntryView = Backbone.View.extend({
 
  initialize: function() {
    this.render(); 
  },

  render: function() {
    this.$el.html(this.template());
    console.log(this.$el.find('.video-list-entry-title'));
    this.$el.find('.media-object').attr('src', this.model.attributes.thumbnail);
    //this.$el.find('.video-list-entry-title').val(this.model.attributes.title);
    //console.log(this.model);
    return this.$el;
  },

  template: templateURL('src/templates/videoListEntry.html')

});
