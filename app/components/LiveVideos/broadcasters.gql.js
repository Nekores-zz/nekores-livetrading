export default `

query exec($vPageNo: Int!, $vPageSize: Int!, $bPage: Int, $bPsize: Int) {
    replays: findPublishedPlaybacks(pageNumber: $vPageNo, pageSize: $vPageSize, decelerate: true) {
    totalNumber
    pageNumber
    pageSize
    sortedField
    playbacks {
      uid
      userId
      url
      cover
      views
      video_size
      duration_text
      duration_secs
      order
      created
      published
      startTime
      endTime
      published
      title
      liveViews
      user{
        online
        name
        image
        aboutme
        followers {
          uid
          name
          image
          aboutme
          follower
          following
          online
          location
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
        playbacks {
          uid
          title
          cover
          lastUpdated
          title
          views
          liveViews
          url
      }
        broadcaster {
          views
          created
          rP
          rN
          streamId
          totalVideos
          streamUid
      }
      broadcasterListDetail {
        totalViews
        on
        title
        banner
      }
      blockerUsers {
        uid
      }
      broadcasterDetail {
          lastPublished
          lastStartPublishing
          playUrl
          m3u8Url
          playbackId
          lastPlayback {
            title
            cover
            url
            userId
            cover
            streamId
        }
        }
      }
    }
  }

  sortBroadcasters(shortedFields: "broadcaster.rP",decelerate: true, pageNumber: $bPage, pageSize: $bPsize, isOn:true) {
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
        streamId
        totalVideos
        streamUid
      }
      broadcasterListDetail {
        totalViews
        on
        title
        banner
      }
      playbacks {
        uid
        title
        cover
        lastUpdated
        title
        views
        liveViews
      }
      blockerUsers {
        uid
      }
      broadcasterDetail {
        lastPublished
        lastStartPublishing
        m3u8Url
        playUrl
        playbackId
        lastPlayback{
          uid
        }
      }
    }
  }
}`;
