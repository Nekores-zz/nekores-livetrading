export default `
  mutation link($binstagram: String!, $btwitter: String!, $bfacebook: String!) {
    updateSocialProfileLinks(instagram: $binstagram, twitter: $btwitter, facebook: $bfacebook) {
        instagram
        twitter
        facebook
    }
  }

`;
