import { createStitches } from "@stitches/react";

// Configuração base do Stitches (você pode integrar com o seu arquivo stitches.config.ts se já tiver um)
export const { styled } = createStitches({
  theme: {
    colors: {
      background: "#f4f4f5",
      surface: "#ffffff",
      primary: "#2563eb",
      primaryHover: "#1d4ed8",
      textMain: "#18181b",
      textMuted: "#71717a",
      border: "#e4e4e7",
      error: "#ef4444",
    },
    radii: {
      md: "8px",
      lg: "12px",
    },
    shadows: {
      card: "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
    },
    space: {
      1: "4px",
      2: "8px",
      3: "16px",
      4: "24px",
      5: "32px",
    },
  },
});

export const MainContainer = styled("main", {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  height: "100vh",
  width: "100vw",
  position: "fixed",
  top: 0,
  left: 0,
  backgroundColor: "$background",
  fontFamily: "Inter, system-ui, sans-serif",
  padding: "$4",
  boxSizing: "border-box",
});

export const LoginCard = styled("div", {
  backgroundColor: "$surface",
  width: "100%",
  maxWidth: "400px",
  padding: "$5",
  borderRadius: "$lg",
  boxShadow: "$card",
  display: "flex",
  flexDirection: "column",
  gap: "$4",
});

export const Header = styled("div", {
  textAlign: "center",
  marginBottom: "$2",
});

export const Title = styled("h1", {
  color: "$textMain",
  fontSize: "24px",
  fontWeight: "600",
  margin: "0 0 $2 0",
});

export const Subtitle = styled("p", {
  color: "$textMuted",
  fontSize: "14px",
  margin: 0,
});

export const Form = styled("form", {
  display: "flex",
  flexDirection: "column",
  gap: "$3",
});

export const FormGroup = styled("div", {
  display: "flex",
  flexDirection: "column",
  gap: "$2",
});

export const Label = styled("label", {
  color: "$textMain",
  fontSize: "14px",
  fontWeight: "500",
});

export const Input = styled("input", {
  width: "100%",
  backgroundColor: "$background",
  padding: "10px 12px",
  borderRadius: "$md",
  border: "1px solid $border",
  fontSize: "14px",
  outline: "none",
  transition: "border-color 0.2s ease",
  boxSizing: "border-box",

  "&:focus": {
    borderColor: "$primary",
  },
  "&::placeholder": {
    color: "$textMuted",
  },
});

export const Button = styled("button", {
  backgroundColor: "$primary",
  color: "#ffffff",
  border: "none",
  padding: "12px",
  borderRadius: "$md",
  fontSize: "14px",
  fontWeight: "600",
  cursor: "pointer",
  transition: "background-color 0.2s ease",
  marginTop: "$2",

  "&:hover": {
    backgroundColor: "$primaryHover",
  },
  "&:active": {
    transform: "translateY(1px)",
  },
});

export const Footer = styled("div", {
  textAlign: "center",
  marginTop: "$4",
  fontSize: "14px",
  color: "$textMuted",
});

export const LinkText = styled("a", {
  color: "$primary",
  textDecoration: "none",
  fontWeight: "500",
  cursor: "pointer",

  "&:hover": {
    textDecoration: "underline",
  },
});
