"use strict";
var AWS = require("aws-sdk");

module.exports.handleUploads = async (event) => {
  console.log("received S3 upload");

  event.Records.map((record, context) => {
    var sns = new AWS.SNS();
    var params = {
      Message: `${record.s3.object.key} was uploaded`,
      Subject: "Document uploaded",
      TopicArn: process.env.SNS_ARN,
    };

    sns.publish(params, context.done);
  });
};
