export default `
    mutation ($social: String!) {
       deleteSocialProfileLinks(social: $social) {
            string
        }
    }
`;
