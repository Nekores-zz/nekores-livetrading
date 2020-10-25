export default `
mutation($title: String!) {
    updateStreamTitle(title: $title) {
        string
    }
}
`;
