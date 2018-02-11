type configOptions = {
    kafkaHost: string,
    ssl: bool,
  };
type topics = array(string);
type eventFunc = {. [@bs.meth] "on": (string, unit) => unit};
 let options:  configOptions = {
   kafkaHost: "broker:9092",
   ssl: true
   };

let topic: topics = [|"topic"|];
type t;
[@bs.new][@bs.module "kafka-node"] external createConsumerGroup : (configOptions, topics) => t = "ConsumerGroup";

let logError = (error) => Js.log(["error", error]);
let logMessage = (message) => Js.log(["message", message]);

[@bs.send] external on: (t, string, (string => unit)) => t = "on";
let consumer = createConsumerGroup(options, topic);

on(consumer, "error", logError);
on(consumer, "message", logMessage);

/* consumer##on("error", logError); */
