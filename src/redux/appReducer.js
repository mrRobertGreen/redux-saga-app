const SHOW_ALERT = "app/SHOW_ALERT"
const HIDE_ALERT = "app/HIDE_ALERT"

const initialState = {
	isShowAlert: false,
	alertMessage: "",
}

export default function appReducer(state = initialState, action) {
	switch (action.type) {
		case SHOW_ALERT:
			return {
				...state,
				...action.payload
			}
		case HIDE_ALERT:
			return {
				...state,
				isShowAlert: false
			}
		default:
			return state
	}
}
export const showAlert = (alertMessage) => ({type: SHOW_ALERT, payload: {alertMessage, isShowAlert: true}})
export const hideAlert = () => ({type: HIDE_ALERT})