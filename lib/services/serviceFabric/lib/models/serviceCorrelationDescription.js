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

/**
 * @class
 * Initializes a new instance of the ServiceCorrelationDescription class.
 * @constructor
 * The description of the service correlation
 *
 * @member {string} [serviceName]
 *
 * @member {string} [serviceCorrelationScheme] Possible values include:
 * 'Invalid', 'Affinity', 'AlignedAffinity', 'NonAlignedAffinity'
 *
 */
class ServiceCorrelationDescription {
  constructor() {
  }

  /**
   * Defines the metadata of ServiceCorrelationDescription
   *
   * @returns {object} metadata of ServiceCorrelationDescription
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'ServiceCorrelationDescription',
      type: {
        name: 'Composite',
        className: 'ServiceCorrelationDescription',
        modelProperties: {
          serviceName: {
            required: false,
            serializedName: 'ServiceName',
            type: {
              name: 'String'
            }
          },
          serviceCorrelationScheme: {
            required: false,
            serializedName: 'ServiceCorrelationScheme',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = ServiceCorrelationDescription;
