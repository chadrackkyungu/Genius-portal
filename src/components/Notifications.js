import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const warningMessage = (message) => {
    toast.warning(message, { position: toast.POSITION.BOTTOM_CENTER });
}

export const successMessage = (message) => {
    toast.success(message, { position: toast.POSITION.TOP_LEFT });
}

export const successSubmitLeave = (message) => {
    toast.success(message, { position: toast.POSITION.TOP_UP_CENTER });
}

export const successUpdate = (message) => {
    toast.success(message, { position: toast.POSITION.TOP_RIGHT });
}