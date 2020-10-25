export default `
query {
    getUserInfo{
        uid
        socialLinks {
            facebook
            twitter
            instagram
            youtube
            snapchat
            telegram
        }
        publicInfo{
            uid
                name
                following
                follower
                aboutme
                image
        
            broadcaster {
                views
                streamId
            }
            broadcasterDetail {
                lastPublished
            }
            broadcasterListDetail {
                totalViews
            
            }
            blockedUsers {
                uid
            }
            notifications {
                uid
            }
            blockerUsers {
                uid
            }
            followings {
                uid
            }
            followers {
                uid
            }
            playbacks {
                uid
            }
        }    
        privateInfo {
            socialImage
            email
            langPref
            lang
            fname
            lname
            ip
            ipReg
        }
    }
}
`;
