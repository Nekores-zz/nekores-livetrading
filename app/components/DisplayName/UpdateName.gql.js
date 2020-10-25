export default `
mutation($name: String!) {
    updateUserName(name: {string: $name}) {
        string
    }
}
`;
