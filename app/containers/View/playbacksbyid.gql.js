export default `
    query exec($vPageNo: Int, $vPageSize: Int, $vuser: String){
        findPublishedPlaybacks(pageNumber: $vPageNo, pageSize: $vPageSize, decelerate: true, shortedFields: $vuser) {
            totalNumber
            pageNumber
            pageSize
            decelerate
            sortedField
            playbacks {
                uid
                cover
                views
                created
                user {
                    name
                }
            }
        }
    }
`;
