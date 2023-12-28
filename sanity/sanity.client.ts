
import { createClient, type ClientConfig } from "@sanity/client";

const config: ClientConfig = {
    projectId: "ekf0hbjx",
    dataset: "production",
    apiVersion: "2023-12-19",
    useCdn: false,
};
  
const client = createClient(config);

export default client;