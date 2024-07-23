import { GraphQLClient } from "graphql-request";

export const createClient = () => {
  const runtimeConfig = useRuntimeConfig();
  const endpoint = "https://api.github.com/graphql";

  // Ensure the token is treated as a string
  const token = runtimeConfig.public.GITHUB_TOKEN


  if (!token) {
    console.error("GitHub token is not set or is invalid");
  } else {
    console.log("GitHub token loaded successfully");
  }

  return new GraphQLClient(endpoint, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};
