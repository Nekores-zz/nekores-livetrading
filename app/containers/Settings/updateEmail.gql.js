export default `
mutation($email: String!) {
    updateUserEmail(email: $email) {
        string
    }
}
`;
