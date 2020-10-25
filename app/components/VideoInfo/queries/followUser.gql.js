export default `
    mutation($uid: String!){
        followUser(toUser: $uid){
            string
        }
    }

`;
