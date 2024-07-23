// queries/github.js

export const GET_USER_CONTRIBUTIONS = `
query ($cursor: String) {
  user(login: "WinneRose") {
    repositories(first: 100, after: $cursor) {
      nodes {
        name
        defaultBranchRef {
          target {
            ... on Commit {
              history(first: 100) {
                nodes {
                  committedDate
                }
                pageInfo {
                  hasNextPage
                  endCursor
                }
              }
            }
          }
        }
      }
      pageInfo {
        hasNextPage
        endCursor
      }
    }
  }
}
`;
