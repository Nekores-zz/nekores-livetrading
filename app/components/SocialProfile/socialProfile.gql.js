export default `
{
  getUserInfo{
  social {
    facebook
    twitter
    instagram
  }

   publicInfo {
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
  }
}
}
`;
