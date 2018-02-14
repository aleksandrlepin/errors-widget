import * as types from './actionTypes';
import FetchApi from '../api/FetchApi';

export const loadReports = (reportOptions) => {
  return (dispatch) => {
    dispatch(loadingReports());
    return FetchApi.getReports()
    .then(reports => {
      if (reportOptions.includes('errors')) {
        dispatch(loadErrorsSuccess(reports.errorsHistory));
      } else {
        dispatch(loadErrorsSuccess([]));
      }
      if (reportOptions.includes('warnings')) {
        dispatch(loadWarningsSuccess(reports.warningsHistory));
      } else {
        dispatch(loadWarningsSuccess([]));
      }
    })
    .catch(error => {
       throw(error);
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

export const loadErrorsSuccess = (errors) => {
  return {
    type: types.LOAD_ERRORS_SUCCESS,
    payload: {
      errors,
      isFetching: false
    }
  };
}

export const loadWarningsSuccess = (warnings) => {
  return {
    type: types.LOAD_WARNINGS_SUCCESS,
    payload: {
      warnings,
      isFetching: false
    }
  };
}

export const setReportOptions = (reportOptions) => {
  return {
    type: types.SET_REPORT_OPRIONS,
    payload: {
      reportOptions
    }
  }
}

export const setReportType = (setReportType) => {
  return {
    type: types.SET_REPORT_TYPE,
    payload: {
      setReportType
    }
  }
}