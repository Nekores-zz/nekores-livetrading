export default `
query {
  sortBroadcasters(shortedFields: "") {
  totalNumber
  pageSize
  pageNumber
  decelerate
  sortedField
  searchText
  users {
      uid
      name
      image
      aboutme
      follower
      following
      followers {
        uid
        name
        image
        aboutme
        follower
        following
        online
        location
        broadcaster {
            views
            created
            rP
            rN
        }
        broadcasterListDetail {
          totalViews
          on
          image
          name
          title
          banner
        }
        broadcasterDetail {
            lastPublished
            lastStartPublishing
            playUrl
            playbackId
        }
      }
      followings {
        uid
        name
        image
        aboutme
        follower
        following
        online
        location
      }
      online
      location
      broadcaster {
          views
          created
          rP
          rN
      }
      broadcasterListDetail {
        totalViews
        on
        image
        name
        title
        banner
      }
      broadcasterDetail {
          lastPublished
          lastStartPublishing
          playUrl
          playbackId
      }
  }
}

}

`;
