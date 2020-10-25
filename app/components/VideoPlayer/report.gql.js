export default `
    mutation ($reportData: ReportData!){
        report(report: $reportData) {
            string
        }
    }
`;
