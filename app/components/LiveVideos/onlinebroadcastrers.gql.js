export default `
query exec($vPageNo: Int!, $vPageSize: Int!) { 
  replays: findPublishedPlaybacks(pageNumber: $vPageNo, pageSize: $vPageSize) {
    totalNumber
    pageSize
    pageNumber
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
      liveViews
      
    }
  }
}

`;
