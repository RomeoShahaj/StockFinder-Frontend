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

    if (Array.isArray(err?.data?.errors)) {
      for (const val of err.data.errors) {
        toast.warning(val.description);
      }
    } else if (typeof err?.data?.errors === "object") {
      for (const key in err.data.errors) {
        if (Array.isArray(err.data.errors[key]) && err.data.errors[key][0]) {
          toast.warning(err.data.errors[key][0]);
        }
      }
    } else if (err?.data) {
      toast.warning(err.data);
    } else if (err?.status === 401) {
      toast.warning("Please login");
      window.history.pushState({}, "LoginPage", "/login");
    } else if (err) {
      toast.warning(err?.data);
    }
  } else {
    toast.error("An unexpected error occurred");
    console.error(error);
  }
};
