export default `
  mutation ($image: String!) {
    updateImageSocialNetwork(image: {base64Image: $image}) {
      image
    }
  }

`;
