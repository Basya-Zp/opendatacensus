/*
 * Adanced layer for data mapping to format objects according to requireements
 */

var mainDataMapper = require('../dataMapper/main');
var _ = require('underscore');

var entitiesConstructor = {
  /*
   * map places to get only required by DB model fields
   */
  mapPlaces: function (places) {
    var mappedObject = [];
    if (places && places.length) {
      var length = places.length;
      for (var i = 0; i < length; i++) {
        var currentObject = places[i];
        var mappedCurrentObject = mainDataMapper.mapPlaceObject(currentObject);
        if (mappedCurrentObject) {
          mappedObject.push(mappedCurrentObject);
        }
      }

      return mappedObject;
    } else {
      return false;
    }
  },
  /*
   * map datasets to get only required by DB model fields
   */
  mapDatasets: function (datasets) {
    var mappedObject = [];
    if (datasets && datasets.length) {
      var length = datasets.length;
      for (var i = 0; i < length; i++) {
        var currentObject = datasets[i];
        var mappedCurrentObject = mainDataMapper.mapDatasetsObject(currentObject);
        if (mappedCurrentObject) {
          mappedObject.push(mappedCurrentObject);
        }
      }

      return mappedObject;
    } else {
      return false;
    }
  },
  /*
   * map questions to get only required by DB model fields
   */
  mapQuestions: function (questions) {
    var mappedObject = [];
    if (questions && questions.length) {
      var length = questions.length;
      for (var i = 0; i < length; i++) {
        var currentObject = questions[i];
        var mappedCurrentObject = mainDataMapper.mapQuestionObject(currentObject);
        if (mappedCurrentObject) {
          mappedObject.push(mappedCurrentObject);
        }
      }

      return mappedObject;
    } else {
      return false;
    }
  },
  /*
   * map registry to get only required by DB model fields
   */
  mapRegistry: function (registryObjects) {
    var mappedObject = [];
    if (registryObjects && registryObjects.length) {
      var length = registryObjects.length;
      for (var i = 0; i < length; i++) {
        var currentObject = registryObjects[i];
        var mappedCurrentObject = mainDataMapper.mapRegistryObject(currentObject);
        if (mappedCurrentObject) {
          mappedObject.push(mappedCurrentObject);
        }
      }
      return mappedObject;
    } else {
      return false;
    }
  },
  /*
   * map config from array of key-value pairs to json object
   */
  deparseConfig: function (configArray) {
    var deparsedConfigObject = {};
    for (var i = 0; i < configArray.length; i++) {
      var key = configArray[i]['key'];
      var value = configArray[i]['value'];

      if (key) {
        deparsedConfigObject[key] = value;
      }
    }

    return deparsedConfigObject;
  },
  /*
   * map config to get only required by DB model fields
   */
  mapConfig: function (configObject) {
    var mappedObject = false;

    if (_.isObject(configObject) && _.keys(configObject).length) {
      mappedObject = mainDataMapper.mapConfig(configObject);
      return mappedObject;
    } else {
      return false;
    }
  },
  /*
   * add 'site' key and value in object
   */
  setSiteValue: function (entitiesArray, site) {
    for (var i = 0; i < entitiesArray.length; i++) {
      entitiesArray[i]['site'] = site;
    }

    return entitiesArray;
  },
  /*
   * add 'id' to config object
   */
  setConfigId: function (configObject, id) {
    configObject['id'] = id;
    return configObject;
  }
};

module.exports = entitiesConstructor;