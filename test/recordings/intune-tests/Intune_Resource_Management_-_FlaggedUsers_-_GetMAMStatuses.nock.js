// This file has been autogenerated.

exports.setEnvironment = function() {
  process.env['AZURE_SUBSCRIPTION_ID'] = 'dummy';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/providers/Microsoft.Intune/locations/fef.msua06/statuses/default?api-version=2015-01-14-preview')
  .reply(200, "{\"id\":\"/providers/Microsoft.Intune/locations/fef.msua06/statuses/default\",\"name\":\"default\",\"type\":\"Microsoft.Intune/locations/statuses\",\"properties\":{\"deployedPolicies\":4,\"status\":\"complete\",\"flaggedUsers\":1,\"policyAppliedUsers\":0,\"enrolledUsers\":1,\"wipePendingApps\":2,\"wipeFailedApps\":0,\"wipeSucceededApps\":0,\"lastModifiedTime\":\"2015-12-04T22:30:00.8327158\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '360',
  'content-type': 'application/json;odata=minimalmetadata;streaming=true;charset=utf-8,application/json;odata=minimalmetadata;streaming=true;charset=utf-8',
  expires: '-1',
  'last-modified': 'Fri, 04 Dec 2015 22:36:24 GMT',
  'x-ms-ratelimit-remaining-tenant-reads': '14998',
  'elapsed-time-milliseconds': '131',
  'service-name': 'AdminExperienceService',
  'client-request-id': 'cf5d98fe-21c2-4594-88fc-f6f09124c0c9',
  'unique-request-id': 'f1099919-a425-42d3-8bb0-70e0310f0075',
  'x-ms-request-id': 'f1099919-a425-42d3-8bb0-70e0310f0075',
  'related-activity-id': 'f1099919-a425-42d3-8bb0-70e0310f0075',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  dataserviceversion: '3.0;',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-correlation-request-id': '74c0fb29-85af-47fc-bae2-65dc3d53d59f',
  'x-ms-routing-request-id': 'WESTUS:20151204T223625Z:74c0fb29-85af-47fc-bae2-65dc3d53d59f',
  date: 'Fri, 04 Dec 2015 22:36:25 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/providers/Microsoft.Intune/locations/fef.msua06/statuses/default?api-version=2015-01-14-preview')
  .reply(200, "{\"id\":\"/providers/Microsoft.Intune/locations/fef.msua06/statuses/default\",\"name\":\"default\",\"type\":\"Microsoft.Intune/locations/statuses\",\"properties\":{\"deployedPolicies\":4,\"status\":\"complete\",\"flaggedUsers\":1,\"policyAppliedUsers\":0,\"enrolledUsers\":1,\"wipePendingApps\":2,\"wipeFailedApps\":0,\"wipeSucceededApps\":0,\"lastModifiedTime\":\"2015-12-04T22:30:00.8327158\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '360',
  'content-type': 'application/json;odata=minimalmetadata;streaming=true;charset=utf-8,application/json;odata=minimalmetadata;streaming=true;charset=utf-8',
  expires: '-1',
  'last-modified': 'Fri, 04 Dec 2015 22:36:24 GMT',
  'x-ms-ratelimit-remaining-tenant-reads': '14998',
  'elapsed-time-milliseconds': '131',
  'service-name': 'AdminExperienceService',
  'client-request-id': 'cf5d98fe-21c2-4594-88fc-f6f09124c0c9',
  'unique-request-id': 'f1099919-a425-42d3-8bb0-70e0310f0075',
  'x-ms-request-id': 'f1099919-a425-42d3-8bb0-70e0310f0075',
  'related-activity-id': 'f1099919-a425-42d3-8bb0-70e0310f0075',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  dataserviceversion: '3.0;',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-correlation-request-id': '74c0fb29-85af-47fc-bae2-65dc3d53d59f',
  'x-ms-routing-request-id': 'WESTUS:20151204T223625Z:74c0fb29-85af-47fc-bae2-65dc3d53d59f',
  date: 'Fri, 04 Dec 2015 22:36:25 GMT',
  connection: 'close' });
 return result; }]];