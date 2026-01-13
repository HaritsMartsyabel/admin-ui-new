import React, { useState } from "react";
import AuthLayout from "../components/Layouts/AuthLayout";
import FormSignUp from "../components/Fragments/FormSignUp";
import AppSnackbar from "../components/Elements/AppSnackbar";
import { registerService } from "../services/authService";

const SignUpPage = () => {
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "success",
  });

  const handleCloseSnackbar = () => {
    setSnackbar((prev) => ({ ...prev, open: false }));
  };

  const handleRegister = async ({ name, email, password }) => {
    try {
      const { msg } = await registerService(name, email, password);

      setSnackbar({
        open: true,
        message: msg || "Register Berhasil",
        severity: "success",
      });
    } catch (err) {
      setSnackbar({
        open: true,
        message: err.msg || "Email sudah pernah digunakan sebelumnya",
        severity: "error",
      });
    }
  };

  return (
    <AuthLayout title="Register">
      <FormSignUp onSubmit={handleRegister} />

      <AppSnackbar
        open={snackbar.open}
        message={snackbar.message}
        severity={snackbar.severity}
        onClose={handleCloseSnackbar}
      />
    </AuthLayout>
  );
};

export default SignUpPage;
