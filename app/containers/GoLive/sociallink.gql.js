export default `

    mutation ($link: SocialLinksInput!) {
        updateSocialProfileLinks(link: $link) {
            string
        }
    }
`;
