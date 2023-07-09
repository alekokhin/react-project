import { CircularProgress } from "@mui/material";
import React from "react";

type WrapperProps = {
  isLoading: boolean;
};

export const WithLoader = ({
  isLoading,
  children,
}: WrapperProps & { children: React.ReactNode }) => {
  return isLoading ? (
    <CircularProgress />
  ) : (
    <>{children}</>
  );
};
