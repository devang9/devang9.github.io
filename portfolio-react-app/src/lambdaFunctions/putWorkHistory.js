'use-strict';
const AWS = require('aws-sdk');

exports.handler = async (event, context) => {
    const documentClient = new AWS.DynamoDB.DocumentClient();
    let responseBody = "";
    let statusCode = 0;
    const params = {
        TableName: "WorkExperience",
        Item: {
            company: 'TCS'
        }
    }
    try {
        const data = await documentClient.put(params).promise();
        responseBody = JSON.stringify(data);
        statusCode = 201;
    } catch (error) {

        responseBody = `Unable to put work exp ${error}`;
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