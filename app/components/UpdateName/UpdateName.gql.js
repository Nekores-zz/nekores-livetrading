export default `
mutation($name: String!) {
    updateUserName(name: $name) {
        string
    }
}
`;
