export default `
  mutation ($image: String!) {
    updateUserImageProfile(image: {base64Image: $image}) {
      image
    }
  }

`;
