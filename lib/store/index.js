'use strict';

/**
 * Dependencies
 */

var { AsyncStorage } = require('react-native');
const { createStore, compose } = require('redux');
const reducer = require('./reducer');
const { persistStore, autoRehydrate } = require('redux-persist');

const store = compose(autoRehydrate())(createStore)(reducer);

var pst = persistStore(store, {storage: AsyncStorage}, () => {
    console.log('Persisted redux state restored.')
});

// FOR TESTING
//pst.purge();

/**
 * Exports
 */

module.exports = store;
