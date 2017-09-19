import Ember from 'ember';

export default Ember.Component.extend({
    updateRentalForm: false,
    actions: {
        // Display the Update Rental Form
        updateRentalForm() {
            this.set('updateRentalForm', true);
        },

        update(rental) {
            var params = {
                owner: this.get('owner'),
                city: this.get('city'),
                type: this.get('type'),
                image: this.get('image'),
                bedrooms: this.get('bedrooms')
            };

            // Return to displaying the button
            this.set('updateRentalForm', false);

            // Send update action from update-rental to rental-title
            this.sendAction('update', rental, params);
        }
    }
});
