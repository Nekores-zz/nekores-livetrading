export default `
mutation ($toUser: String!){
    joinLive(toUser: $toUser) {
        string
    }
}
`;
