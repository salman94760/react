import { toast } from 'react-toastify';
export const msgInfo = (message) =>{
 	toast.info(message, {
 		position: "top-right",
		autoClose: 5000,
		hideProgressBar: false,
		closeOnClick: false,
		pauseOnHover: true,
		draggable: true,
		progress: undefined,
		theme: "dark"
	});
}

export const msgError = (message) =>{
 	toast.error(message, {
 		position: "top-right",
		autoClose: 5000,
		hideProgressBar: false,
		closeOnClick: false,
		pauseOnHover: true,
		draggable: true,
		progress: undefined,
		theme: "dark"
	});
}

export const msgSuccess = (message) =>{
 	toast.success(message, {
 		position: "top-right",
		autoClose: 5000,
		hideProgressBar: false,
		closeOnClick: false,
		pauseOnHover: true,
		draggable: true,
		progress: undefined,
		theme: "dark"
	});
}

export const msgWarning = (message) =>{
 	toast.warn(message, {
 		position: "top-right",
		autoClose: 5000,
		hideProgressBar: false,
		closeOnClick: false,
		pauseOnHover: true,
		draggable: true,
		progress: undefined,
		theme: "dark"
	});
}