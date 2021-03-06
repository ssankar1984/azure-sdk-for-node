// This file has been autogenerated.

exports.setEnvironment = function() {
  process.env['AZURE_BATCH_ACCOUNT'] = 'jstesteastus2';
  process.env['AZURE_BATCH_ENDPOINT'] = 'https://jstesteastus2.eastus2.batch.azure.com';
  process.env['AZURE_SUBSCRIPTION_ID'] = '46241355-bb95-46a9-ba6c-42b554d71925';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://jstesteastus2.eastus2.batch.azure.com:443')
  .get('/lifetimepoolstats?api-version=2017-01-01.4.0')
  .reply(200, "{\r\n  \"odata.metadata\":\"https://jstesteastus2.eastus2.batch.azure.com/$metadata#poolstats/@Element\",\"url\":\"https://jstesteastus2.eastus2.batch.azure.com/lifetimepoolstats\",\"usageStats\":{\r\n    \"startTime\":\"2016-04-08T21:01:48.3891118Z\",\"lastUpdateTime\":\"2017-02-03T21:00:00Z\",\"dedicatedCoreTime\":\"P2976DT3H29M23.936S\"\r\n  },\"resourceStats\":{\r\n    \"startTime\":\"2016-04-08T21:01:48.3891118Z\",\"diskReadIOps\":\"5622326\",\"diskWriteIOps\":\"1174086520\",\"lastUpdateTime\":\"2017-02-03T21:00:00Z\",\"avgCPUPercentage\":0.32996593049395129,\"avgMemoryGiB\":1.9404109505238296,\"peakMemoryGiB\":1.548187255859375,\"avgDiskGiB\":62.408870888819479,\"peakDiskGiB\":32.325851440429687,\"diskReadGiB\":175.30862045288086,\"diskWriteGiB\":16846.33997631073,\"networkReadGiB\":240.56158129870892,\"networkWriteGiB\":134.31317858211696\r\n  }\r\n}", { 'transfer-encoding': 'chunked',
  'content-type': 'application/json;odata=minimalmetadata',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': 'b30545ce-f5f0-4e24-a9e2-550d7f8ff182',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-content-type-options': 'nosniff',
  dataserviceversion: '3.0',
  date: 'Fri, 03 Feb 2017 21:54:26 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://jstesteastus2.eastus2.batch.azure.com:443')
  .get('/lifetimepoolstats?api-version=2017-01-01.4.0')
  .reply(200, "{\r\n  \"odata.metadata\":\"https://jstesteastus2.eastus2.batch.azure.com/$metadata#poolstats/@Element\",\"url\":\"https://jstesteastus2.eastus2.batch.azure.com/lifetimepoolstats\",\"usageStats\":{\r\n    \"startTime\":\"2016-04-08T21:01:48.3891118Z\",\"lastUpdateTime\":\"2017-02-03T21:00:00Z\",\"dedicatedCoreTime\":\"P2976DT3H29M23.936S\"\r\n  },\"resourceStats\":{\r\n    \"startTime\":\"2016-04-08T21:01:48.3891118Z\",\"diskReadIOps\":\"5622326\",\"diskWriteIOps\":\"1174086520\",\"lastUpdateTime\":\"2017-02-03T21:00:00Z\",\"avgCPUPercentage\":0.32996593049395129,\"avgMemoryGiB\":1.9404109505238296,\"peakMemoryGiB\":1.548187255859375,\"avgDiskGiB\":62.408870888819479,\"peakDiskGiB\":32.325851440429687,\"diskReadGiB\":175.30862045288086,\"diskWriteGiB\":16846.33997631073,\"networkReadGiB\":240.56158129870892,\"networkWriteGiB\":134.31317858211696\r\n  }\r\n}", { 'transfer-encoding': 'chunked',
  'content-type': 'application/json;odata=minimalmetadata',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': 'b30545ce-f5f0-4e24-a9e2-550d7f8ff182',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-content-type-options': 'nosniff',
  dataserviceversion: '3.0',
  date: 'Fri, 03 Feb 2017 21:54:26 GMT',
  connection: 'close' });
 return result; }]];