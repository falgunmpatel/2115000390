interface Config {
  TESTSERVER: string;
  ACCESSTOKEN: string;
}

export const config: Config = {
  TESTSERVER: process.env.TESTSERVER || "",
  ACCESSTOKEN: process.env.ACCESSTOKEN || "",
};
