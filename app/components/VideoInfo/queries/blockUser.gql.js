export default `
    mutation($uid: String!){
        block(toUser: $uid){
            string
        }
    }

`;
