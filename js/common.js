'use strict';
// JavaScript containing shared constants, for use in all pages.

var backendIp = 'ec2-99-81-194-20.eu-west-1.compute.amazonaws.com';
var token = 'a4e84696-2d87-4f1b-a35c-a6714778bdc9';

function buildUrl(path) {
    return 'http://' + backendIp + '/images' + path + '?token=' + token;
}
