export default `
    mutation($aboutme: String!) {
        updateAboutMe(aboutme: $aboutme) {
            string
        }
    }
`;
