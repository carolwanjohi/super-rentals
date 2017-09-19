import Ember from 'ember';

export default Ember.Component.extend({
    isImageShowing: false,
    actions: {
        imageShow: function() {
            this.set('isImageShowing', true);
        },

        /*-child component(update-rental) calls this.sendAction(‘update’, rental, params); 
        —> triggers update() in parent component(rental-title) 
        —> takes rental and params to index template
        */ 
        update(rental, params) {
            this.sendAction('update', rental, params);
        },

        imageHide: function() {
            this.set('isImageShowing', false);
        },

        delete(rental) {
            if (confirm('Are you sure you want to delete this rental?')) {
                this.sendAction('destroyRental', rental);
            }
        }
    }
});
