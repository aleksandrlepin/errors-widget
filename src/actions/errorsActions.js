import * as types from './actionTypes';
import FetchApi from '../api/FetchApi';

export const loadReports = (reportOptions) => {
  return (dispatch) => {
    dispatch(loadingReports());
    return FetchApi.getReports()
    .then(data => {
      console.log('data: ', data);
        dispatch(loadDataSuccess(data));
    })
    .catch(error => {
       throw(error);
    });
  }
}

export const deleteReports = (index, historyType, data, reportOptions) => {
  const newHistory = data[historyType].filter((value, i) => i !== index);
  const newData = {...data};
  newData[historyType] = newHistory;
  return (dispatch) => {
    dispatch(loadingReports());
    return FetchApi.deleteReports(newData)
      .then(response => {
        dispatch(loadReports(reportOptions));
      })
      .catch(error => {
        throw(error);
      });
  }
}

export const clearReports = (reportOptions) => {
  return (dispatch) => {
    dispatch(loadingReports());
    return FetchApi.clearReports()
    .then(response => {
        dispatch(loadReports(reportOptions));
      })
      .catch(error => {
        throw (error);
      });
  }
}

export const loadingReports = () => {
  return {
    type: types.LOADING_REPORTS,
    payload: {
      isFetching: true
    }
  };
}

export const loadDataSuccess = (data) => {
  return {
    type: types.LOAD_DATA_SUCCESS,
    payload: {
      data,
      isFetching: false
    }
  };
}

export const setReportType = (reportType) => {
  return {
    type: types.SET_REPORT_TYPE,
    payload: {
      active: reportType[0]
    }
  }
}

export const setReportOptions = (reportOptions) => {
  return {
    type: types.SET_REPORT_OPRIONS,
    payload: {
      reportOptions
    }
  }
}
