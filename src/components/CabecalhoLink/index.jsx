import React from "react";
import Button from "@mui/material/Button";

function CabecalhoLink({ url, children }) {
  const isExternal = /^https?:\/\//.test(url);
  const isAnchor = url.startsWith("#");

  if (isExternal || isAnchor) {
    return (
      <Button
        component="a"
        href={url}
        target={isExternal ? "_blank" : undefined}
        rel={isExternal ? "noreferrer" : undefined}
        color="inherit"
        sx={{
          borderRadius: "999px",
          color: "text.secondary",
          fontSize: { xs: "0.82rem", sm: "0.92rem" },
          px: { xs: 1.5, sm: 2 },
          py: 0.8,
          "&:hover": {
            bgcolor: "action.hover",
            color: "primary.main",
          },
        }}
      >
        {children}
      </Button>
    );
  }
}

export default CabecalhoLink;
