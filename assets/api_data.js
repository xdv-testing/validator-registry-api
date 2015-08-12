define({ "api": [  {    "type": "get",    "url": "/reports/:validation_public_key",    "title": "Historical Reports for a Validator",    "name": "historicalReports",    "group": "Reports",    "success": {      "fields": {        "Success 200": [          {            "group": "Success 200",            "type": "<p>ValidationPublicKey</p> ",            "optional": false,            "field": "validation_public_key",            "description": "<p>Ripple validation public key</p> "          },          {            "group": "Success 200",            "type": "<p>Array</p> ",            "optional": false,            "field": "reports",            "description": "<p>Array of Report objects with date, validations properties</p> "          },          {            "group": "Success 200",            "type": "<p>Date</p> ",            "optional": false,            "field": "report.date",            "description": "<p>date of report formatted as YYYY-MM-DD</p> "          },          {            "group": "Success 200",            "type": "<p>Integer</p> ",            "optional": false,            "field": "report.validations",            "description": "<p>total number of validations</p> "          },          {            "group": "Success 200",            "type": "<p>Integer</p> ",            "optional": false,            "field": "report.correlation_coefficient",            "description": "<p>percentage of cluster validations validated by validator</p> "          },          {            "group": "Success 200",            "type": "<p>Integer</p> ",            "optional": false,            "field": "report.divergence_coefficient",            "description": "<p>percentage of validator validations not validated by cluster</p> "          }        ]      }    },    "version": "0.0.0",    "filename": "api/controllers/ValidationReportsController.js",    "groupTitle": "Reports"  },  {    "type": "get",    "url": "/reports",    "title": "Latest Report for all Validators",    "name": "latestReport",    "group": "Reports",    "success": {      "fields": {        "Success 200": [          {            "group": "Success 200",            "type": "<p>Date</p> ",            "optional": false,            "field": "date",            "description": "<p>date of report formatted as YYYY-MM-DD</p> "          },          {            "group": "Success 200",            "type": "<p>Json</p> ",            "optional": false,            "field": "validators",            "description": "<p>map of public keys with validator-specific data</p> "          },          {            "group": "Success 200",            "type": "<p>Integer</p> ",            "optional": false,            "field": "validators.validations",            "description": "<p>total validations for the validator</p> "          },          {            "group": "Success 200",            "type": "<p>Integer</p> ",            "optional": false,            "field": "validators.correlation_coefficient",            "description": "<p>correlation score for the validator</p> "          },          {            "group": "Success 200",            "type": "<p>Integer</p> ",            "optional": false,            "field": "validators.divergence_coefficient",            "description": "<p>divergence score for the validator</p> "          }        ]      }    },    "version": "0.0.0",    "filename": "api/controllers/ValidationReportsController.js",    "groupTitle": "Reports"  },  {    "type": "get",    "url": "/validations",    "title": "",    "name": "listValidations",    "group": "Validations",    "success": {      "fields": {        "Success 200": [          {            "group": "Success 200",            "type": "<p>Integer</p> ",            "optional": false,            "field": "validations_count",            "description": "<p>total validations for validator in past 24 hours</p> "          },          {            "group": "Success 200",            "type": "<p>ValidationPublicKey</p> ",            "optional": false,            "field": "validation_public_key",            "description": "<p>rippled validation public key</p> "          }        ]      }    },    "version": "0.0.0",    "filename": "api/controllers/ValidationsController.js",    "groupTitle": "Validations"  },  {    "type": "get",    "url": "/validators",    "title": "List of all known validators",    "name": "listValidators",    "group": "Validators",    "success": {      "fields": {        "Success 200": [          {            "group": "Success 200",            "type": "<p>String</p> ",            "optional": false,            "field": "domain",            "description": "<p>verified domain of validator if exists</p> "          },          {            "group": "Success 200",            "type": "<p>String</p> ",            "optional": false,            "field": "error",            "description": "<p>domain verification failure step</p> "          },          {            "group": "Success 200",            "type": "<p>ValidationPublicKey</p> ",            "optional": false,            "field": "validation_public_key",            "description": "<p>ripple validation public key</p> "          }        ]      }    },    "version": "0.0.0",    "filename": "api/controllers/ValidatorsController.js",    "groupTitle": "Validators"  }] });