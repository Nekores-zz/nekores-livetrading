export default `
    query  exec($vPageNo: Int, $vPageSize: Int){
        replays: findOwnerPlaybacks(pageNumber: $vPageNo, pageSize: $vPageSize){
            totalNumber
            pageSize
            pageNumber
            sortedField
            searchText
            decelerate
            playbacks{
                uid
                published
            }
            
        }
    }
`;
