import { Alert, Snackbar } from "@mui/material";
import { useContext } from "react";

import { toastContext } from "../utils/context";

function Toast() {
  const { toast, setToast } = useContext(toastContext);
  const closeToast = () => {
    setToast({ ...toast, show: false });
  };
  return (
    <Snackbar
      anchorOrigin={{ vertical: "top", horizontal: "center" }}
      open={toast?.show}
      autoHideDuration={5000}
      onClose={closeToast}
    >
      <Alert variant="filled" onClose={closeToast} severity={toast?.color} sx={{ width: "100%" }}>
        {toast?.message}
      </Alert>
    </Snackbar>
  );
}

export default Toast;
