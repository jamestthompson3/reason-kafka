// Generated by BUCKLESCRIPT VERSION 2.1.0, PLEASE EDIT WITH CARE
'use strict';

var KafkaNode = require("kafka-node");

var options = /* record */[
  /* kafkaHost */"broker:9092",
  /* ssl : true */1
];

var topic = /* array */["topic"];

function logError(error) {
  console.log(/* :: */[
        "error",
        /* :: */[
          error,
          /* [] */0
        ]
      ]);
  return /* () */0;
}

function logMessage(message) {
  console.log(/* :: */[
        "message",
        /* :: */[
          message,
          /* [] */0
        ]
      ]);
  return /* () */0;
}

var consumer = new KafkaNode.ConsumerGroup(options, topic);

consumer.on("error", logError);

consumer.on("message", logMessage);

exports.options    = options;
exports.topic      = topic;
exports.logError   = logError;
exports.logMessage = logMessage;
exports.consumer   = consumer;
/* consumer Not a pure module */
