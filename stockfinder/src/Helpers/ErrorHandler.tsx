import axios from "axios";
import { toast } from "react-toastify";

// Manual type guard for Axios errors
function isAxiosError(error: unknown): error is { 
  isAxiosError: true; 
  response?: { status?: number; data?: any } 
} {
  return typeof error === "object" && error !== null && (error as any).isAxiosError === true;
}

export const handleError = (error: unknown) => {
  if (isAxiosError(error)) {
    const err = error.response;

    // If no response, treat as unknown error
    if (!err) {
      toast.error("Network error or no response from server");
      return;
    }

    const errors = err.data?.errors;

    if (Array.isArray(errors)) {
      for (const val of errors) {
        toast.warning(val.description);
      }
    } else if (errors && typeof errors === "object") {
      for (const key in errors) {
        if (Array.isArray(errors[key]) && errors[key][0]) {
          toast.warning(errors[key][0]);
        }
      }
    } else if (err.data) {
      toast.warning(err.data);
    } else if (err.status === 401) {
      toast.warning("Please login");
      window.history.pushState({}, "LoginPage", "/login");
    } else {
      toast.warning("Request failed");
    }
  } else {
    toast.error("An unexpected error occurred");
    console.error(error);
  }
};
