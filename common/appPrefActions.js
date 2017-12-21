import callService from '../api/Api';

// action
export function loadInitApp(responseJson) {
  debugger;
  return { type: "LOAD_INIT_APP", responseJson };
}

// thunk
export function initApp() {
  return function(dispatch) {
    let requestParams = {};
    requestParams.action = "INIT";
    requestParams.service = "LOGIN_SVC";
    requestParams.appForms = new Array("LOGIN_FORM","REGISTRATION_FORM","FORGOTPASSWORD_FORM","PASSWORD_CHANGE_FORM");
    requestParams.appTexts = new Array("GLOBAL_PAGE","LOGIN_FORM","REGISTRATION_FORM","FORGOTPASSWORD_FORM","PASSWORD_CHANGE_FORM");
    requestParams.appLabels = new Array("LOGIN_FORM","REGISTRATION_FORM");
    requestParams.appOptions = new Array("REGISTRATION_FORM");
    requestParams.appGlobal = new Array("LANGUAGES");
    let params = {};
    params.requestParams = requestParams;
    params.URI = '/api/login/callService';
    //params.responseCallBack = (params) => { this.setFields(params); };
    return callService(params).then( (responseJson) => {
      dispatch(loadInitApp(responseJson));
    }).catch(error => {
      throw(error);
    });

  };
}
