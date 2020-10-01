'use strict';

class Project {
  get validateAll() {
    return true;
  }

  get rules() {
    return {
      team: 'required',
    };
  }
}

module.exports = Project;
