import { Template } from 'meteor/templating';

import { Random } from '../imports/client/random';

import './main.html';

Template.body.helpers({
  importantMessage() {
    return Random.hello();
  }
});

