// Use Parse.Cloud.define to define as many cloud functions as you want.
// For example:
Parse.Cloud.define("getUpdate", function (request, response) {
    console.log('Received new request from :' + request);
    response.success("Latest Update found Yipeee!");
});