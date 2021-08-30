const fetch = require("node-fetch")
const GQL  = "http://83.229.86.24:3002/graphql"

module.exports = async (query, variables) => {
  const response = await fetch(GQL, {
    headers: {
      "Content-Type": "application/json",
      "authorization": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaXNfYm90Ijp0cnVlLCJpYXQiOjE1MTYyMzkwMjIwMDB9.s5H5oWIJsoqTl3x68y2OPCVuCTzQfgZU_Usn06rVra0"
    },
    method: "POST",
    body: variables
      ? JSON.stringify({
          query: query,
          variables: variables,
        })
      : JSON.stringify({
          query: query,
        }),
  })

  return response
}