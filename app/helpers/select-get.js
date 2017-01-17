import Ember from 'ember';

export function selectGet(params) {
    let obj = params[0];
    let property = params[1];
    return Ember.get(obj, property);
}

export default Ember.Helper.helper(selectGet);
