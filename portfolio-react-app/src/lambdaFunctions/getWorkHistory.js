'use-strict';
const AWS = require('aws-sdk');

exports.handler = async (event, context) => {
    const documentClient = new AWS.DynamoDB.DocumentClient();
    let responseBody = "";
    let statusCode = 0;
    const params = {
        TableName: "WorkExperience",
    }
    try {
        const data = await documentClient.scan(params).promise();
        responseBody = JSON.stringify(data);
        statusCode = 200;
    } catch (error) {

        responseBody = `Unable to get work exp ${error}`;
        statusCode = 403;
    }

    const response = {
        statusCode: statusCode,
        headers: {
            "Content-type": "application/json"
        },
        body: responseBody
    }
    return response;
}