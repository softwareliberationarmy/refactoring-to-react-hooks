const FETCH_DATASET_START = "FETCH_DATASET_START";
const FETCH_DATASET_SUCCESS = "FETCH_DATASET_SUCCESS";
const FETCH_DATASET_FAILURE = "FETCH_DATASET_FAILURE";

const initialState = {
  loading: true,
  error: "",
  salesTotal: 0,
  subscriptionsTotal: 0,
  data: [{ timestamp: new Date().toISOString(), amount: 0 }]
};

export function datasetReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_DATASET_START:
      return { ...state, loading: true };
    case FETCH_DATASET_FAILURE:
      return { ...state, error: action.payload, loading: false };
    case FETCH_DATASET_SUCCESS:
      /*
      This case handles two different conditions:
      1. We use the array of objects coming from "/sales/" or "/subscriptions/" as our dataset
      or
      2. We use the totals coming from the "/totals/" object
       */
      const data = Array.isArray(action.payload) ? action.payload : state.data;
      /* if totals are undefined use the previous state as the default */
      const {
        salesTotal = state.salesTotal,
        subscriptionsTotal = state.subscriptionsTotal
      } = action.payload;

      return {
        ...state,
        loading: false,
        error: "",
        salesTotal,
        subscriptionsTotal,
        data
      };
    default:
      return state;
  }
}

/*
Action creators
*/
function fetchDatasetStart() {
  return { type: FETCH_DATASET_START };
}

function fetchDatasetFailure(payload) {
  return { type: FETCH_DATASET_FAILURE, payload };
}

function fetchDatasetSuccess(payload) {
  return { type: FETCH_DATASET_SUCCESS, payload };
}

export function fetchDataset(endpoint) {
  return function(dispatch) {
    dispatch(fetchDatasetStart());
    return fetch(endpoint)
      .then(response => response.json())
      .then(json => dispatch(fetchDatasetSuccess(json)))
      .catch(error => dispatch(fetchDatasetFailure(error.message)));
  };
}
