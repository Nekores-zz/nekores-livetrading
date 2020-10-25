export default `
    mutation($uid: String!){
        unFollowUser(toUser: $uid){
            string
        }
    }
`;
