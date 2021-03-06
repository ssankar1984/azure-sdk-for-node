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
 * Initializes a new instance of the Drive class.
 * @constructor
 * Provides information about the drive that contains information about the
 * import/export jobs.
 *
 * @member {string} driveId The drive's hardware serial number, without spaces.
 *
 * @member {string} bitLockerKey The BitLocker key used to encrypt the drive.
 *
 * @member {string} manifestFile The relative path of the manifest file on the
 * drive.
 *
 * @member {string} manifestHash The Base16-encoded MD5 hash of the manifest
 * file on the drive.
 *
 */
class Drive {
  constructor() {
  }

  /**
   * Defines the metadata of Drive
   *
   * @returns {object} metadata of Drive
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'Drive',
      type: {
        name: 'Composite',
        className: 'Drive',
        modelProperties: {
          driveId: {
            required: true,
            serializedName: 'driveId',
            type: {
              name: 'String'
            }
          },
          bitLockerKey: {
            required: true,
            serializedName: 'bitLockerKey',
            type: {
              name: 'String'
            }
          },
          manifestFile: {
            required: true,
            serializedName: 'manifestFile',
            type: {
              name: 'String'
            }
          },
          manifestHash: {
            required: true,
            serializedName: 'manifestHash',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = Drive;
