export default `
    mutation ($playbackId: String!){
        deletePlayback(playbackId: $playbackId) {
            string
        }
    }
`;
