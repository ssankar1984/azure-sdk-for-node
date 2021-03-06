/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

const models = require('./index');

/**
 * @class
 * Initializes a new instance of the ElasticPoolDatabaseActivity class.
 * @constructor
 * Represents the activity on an elastic pool.
 *
 * @member {string} [location] The geo-location where the resource lives
 *
 * @member {string} [databaseName] The database name.
 *
 * @member {date} [endTime] The time the operation finished (ISO8601 format).
 *
 * @member {number} [errorCode] The error code if available.
 *
 * @member {string} [errorMessage] The error message if available.
 *
 * @member {number} [errorSeverity] The error severity if available.
 *
 * @member {string} [operation] The operation name.
 *
 * @member {uuid} [operationId] The unique operation ID.
 *
 * @member {number} [percentComplete] The percentage complete if available.
 *
 * @member {string} [requestedElasticPoolName] The name for the elastic pool
 * the database is moving into if available.
 *
 * @member {string} [currentElasticPoolName] The name of the current elastic
 * pool the database is in if available.
 *
 * @member {string} [currentServiceObjective] The name of the current service
 * objective if available.
 *
 * @member {string} [requestedServiceObjective] The name of the requested
 * service objective if available.
 *
 * @member {string} [serverName] The name of the server the elastic pool is in.
 *
 * @member {date} [startTime] The time the operation started (ISO8601 format).
 *
 * @member {string} [state] The current state of the operation.
 *
 */
class ElasticPoolDatabaseActivity extends models['ProxyResource'] {
  constructor() {
    super();
  }

  /**
   * Defines the metadata of ElasticPoolDatabaseActivity
   *
   * @returns {object} metadata of ElasticPoolDatabaseActivity
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'ElasticPoolDatabaseActivity',
      type: {
        name: 'Composite',
        className: 'ElasticPoolDatabaseActivity',
        modelProperties: {
          id: {
            required: false,
            readOnly: true,
            serializedName: 'id',
            type: {
              name: 'String'
            }
          },
          name: {
            required: false,
            readOnly: true,
            serializedName: 'name',
            type: {
              name: 'String'
            }
          },
          type: {
            required: false,
            readOnly: true,
            serializedName: 'type',
            type: {
              name: 'String'
            }
          },
          location: {
            required: false,
            serializedName: 'location',
            type: {
              name: 'String'
            }
          },
          databaseName: {
            required: false,
            readOnly: true,
            serializedName: 'properties.databaseName',
            type: {
              name: 'String'
            }
          },
          endTime: {
            required: false,
            readOnly: true,
            serializedName: 'properties.endTime',
            type: {
              name: 'DateTime'
            }
          },
          errorCode: {
            required: false,
            readOnly: true,
            serializedName: 'properties.errorCode',
            type: {
              name: 'Number'
            }
          },
          errorMessage: {
            required: false,
            readOnly: true,
            serializedName: 'properties.errorMessage',
            type: {
              name: 'String'
            }
          },
          errorSeverity: {
            required: false,
            readOnly: true,
            serializedName: 'properties.errorSeverity',
            type: {
              name: 'Number'
            }
          },
          operation: {
            required: false,
            readOnly: true,
            serializedName: 'properties.operation',
            type: {
              name: 'String'
            }
          },
          operationId: {
            required: false,
            readOnly: true,
            serializedName: 'properties.operationId',
            type: {
              name: 'String'
            }
          },
          percentComplete: {
            required: false,
            readOnly: true,
            serializedName: 'properties.percentComplete',
            type: {
              name: 'Number'
            }
          },
          requestedElasticPoolName: {
            required: false,
            readOnly: true,
            serializedName: 'properties.requestedElasticPoolName',
            type: {
              name: 'String'
            }
          },
          currentElasticPoolName: {
            required: false,
            readOnly: true,
            serializedName: 'properties.currentElasticPoolName',
            type: {
              name: 'String'
            }
          },
          currentServiceObjective: {
            required: false,
            readOnly: true,
            serializedName: 'properties.currentServiceObjective',
            type: {
              name: 'String'
            }
          },
          requestedServiceObjective: {
            required: false,
            readOnly: true,
            serializedName: 'properties.requestedServiceObjective',
            type: {
              name: 'String'
            }
          },
          serverName: {
            required: false,
            readOnly: true,
            serializedName: 'properties.serverName',
            type: {
              name: 'String'
            }
          },
          startTime: {
            required: false,
            readOnly: true,
            serializedName: 'properties.startTime',
            type: {
              name: 'DateTime'
            }
          },
          state: {
            required: false,
            readOnly: true,
            serializedName: 'properties.state',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = ElasticPoolDatabaseActivity;
