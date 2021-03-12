// import Raven from "raven-js";

function init() {
  /* For future implementation with Raven */
  //   Raven.config(
  //     "https://a1ab80b7402a4ef2b78f6b89f54004ac@o501251.ingest.sentry.io/5671547",
  //     {
  //       release: "myapp@1.3.0",
  //       environment: "development-test",
  //     }
  //   ).install();
}

function log(error) {
  console.log(error);

  /* For future implementation with Raven */
  //   Raven.captureException(error);
}

export default {
  init,
  log,
};
