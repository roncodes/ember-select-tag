import Ember from 'ember';
import layout from '../templates/components/select-tag';

export default Ember.Component.extend({
  tagName: 'select',
  attributeBindings: ['name', 'css', 'multiple', 'disabled'],
  disabled: false,
  optionLabel: false,
  optionValue: false,
  content: [],
  value: null,
  multiple: false,
  placeholder: false,
  css: '',
  placeholderSelectable: false,

  didInsertElement: function() {
      var select = Ember.$(this.$());
      if(this.get('value') === null) {
          this.set('value', select.val());
      }
      select.change(function() {
          this.set('value', select.val());
      }.bind(this));
      if(this.get('value') !== null) {
          setTimeout(function() {
             select.val(this.get('value'));
          }.bind(this), 100);
      }
  },

  style: Ember.computed('css', function() {
      return new Ember.Handlebars.SafeString(this.get('css'));
  }),
});
