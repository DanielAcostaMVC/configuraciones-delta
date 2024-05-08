import { Stack, styled } from "@mui/material";

export const UploadFirmaEstilos = () => {
  const StackTabCustom = styled(Stack)(() => ({
    alignItems: "center",
    
  }));
  const StackContentCustom = styled(Stack)(() => ({
    width: "221px",
    minHeight: "80px",
    alignItems: "center",
    alignContent: "center",
  }));
  return {
    StackTabCustom,
    StackContentCustom,
  };
};
