export default `
    mutation($uid: String!){
        unBlock(toUser: $uid){
            string
        }
    }

`;
