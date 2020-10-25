export const getAppAccessToken = `
    query GetAppAccessToken($fbToken: String) {
        getAppAccessToken(fbToken: $fbToken){
            token
            refreshedToken
            anonymous
            created
            expiresIn
            uid
        }
    }
`;

export const refreshToken = `
    query RefreshAppAccessToken ($refreshedToken: String!)  {
        refreshAppAccessToken(refreshedToken: $refreshedToken)  {
            token
            refreshedToken
            anonymous
            created
            expiresIn
            uid
        }
    }
`;
