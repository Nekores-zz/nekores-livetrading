export default `
mutation ($fromUser: String!){
    leaveLive(fromUser: $fromUser) {
        string
    }
}
`;
