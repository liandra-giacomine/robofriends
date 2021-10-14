'use strict';

const robots = ['A', 'B', 'C']

module.exports.showRobot = async (event, context, callback) => {
  const robot = event.queryStringParameters.robot;
  const verifiedRobot = robot != null && robots.contains(robot) ? robot : 'Robot does not exist';

  const response = {
    statusCode: 200,
    body: JSON.stringify({
        message: 'Go Serverless v1.0! Your function executed successfully!',
        input: verifiedRobot,
      }),
  };

  callback(null, response);

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};
