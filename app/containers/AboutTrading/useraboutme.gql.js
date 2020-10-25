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
                uid
                lastPublished
                playbackId
                playUrl
                lastPublished
                lastStartPublishing
                lastPlayback {
                    title
                    cover
                    url
                    userId
                    cover
                    streamId
                }
            }
            broadcasterListDetail {
                totalViews
                title
            
            }
            blockedUsers {
                uid
                name
                aboutme
                image
            }
            notifications {
                uid
                title
            }
            blockerUsers {
                uid
                name
                aboutme
                image
            }
            followings {
                uid
                name
                aboutme
                followers{
                    uid
                }
                image
                playbacks {
                    uid
                    title
                    cover
                    lastUpdated
                    title
                    views
                }
                
            }
            followers {
                uid
                name
                aboutme
                image
            }
            playbacks {
                uid
                title
                cover
                lastUpdated
                title
                views
                url
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
