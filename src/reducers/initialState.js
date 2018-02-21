export default {
  data: {
    errorsHistory: [],
    warningsHistory: [],
  },
  reportTypes: {
    active: 'errorsLog',
    errorsLog: [
        'errors',
        'warnings',
        'type 1 option 3'
    ],
    reportType2: [
        'type 2 option 1',
        'type 2 option 2',
        'type 2 option 3'
    ],
    reportType3: [
        'type 3 option 1',
        'type 3 option 2',
        'type 3 option 3'
    ],
  },
  reportOptions: ['errors'],
  isFetching: false,
}