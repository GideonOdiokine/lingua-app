export const colors = {
  brand: {
    purple: "#6C4EF5",
    deepPurple: "#5B3BF6",
    blue: "#4D8BFF",
    green: "#21C16B",
  },
  semantic: {
    success: "#21C16B",
    warning: "#FFC800",
    streak: "#FF8A00",
    error: "#FF4D4F",
    info: "#4D8BFF",
  },
  neutral: {
    textPrimary: "#0D132B",
    textSecondary: "#6B7280",
    border: "#E5E7EB",
    surface: "#F6F7FB",
    background: "#FFFFFF",
  },
} as const;

export const fonts = {
  regular: "Poppins-Regular",
  medium: "Poppins-Medium",
  semiBold: "Poppins-SemiBold",
  bold: "Poppins-Bold",
} as const;

export const fontAssets = {
  [fonts.regular]: require("@/assets/fonts/Poppins-Regular.ttf"),
  [fonts.medium]: require("@/assets/fonts/Poppins-Medium.ttf"),
  [fonts.semiBold]: require("@/assets/fonts/Poppins-SemiBold.ttf"),
  [fonts.bold]: require("@/assets/fonts/Poppins-Bold.ttf"),
} as const;

export const radii = {
  panel: 26,
  swatch: 14,
  pill: 999,
} as const;

export const shadows = {
  panel: {
    shadowColor: "#0D132B",
    shadowOffset: { width: 0, height: 12 },
    shadowOpacity: 0.06,
    shadowRadius: 28,
    elevation: 4,
  },
} as const;

export const spacing = {
  xs: 8,
  sm: 12,
  md: 16,
  lg: 24,
  xl: 32,
  "2xl": 40,
  "3xl": 56,
} as const;

export const colorSections = [
  {
    title: "PRIMARY",
    tokens: [
      { label: "LINGUA PURPLE", value: colors.brand.purple },
      { label: "LINGUA DEEP PURPLE", value: colors.brand.deepPurple },
      { label: "LINGUA BLUE", value: colors.brand.blue },
      { label: "LINGUA GREEN", value: colors.brand.green },
    ],
  },
  {
    title: "SEMANTIC",
    tokens: [
      { label: "SUCCESS", value: colors.semantic.success },
      { label: "WARNING", value: colors.semantic.warning },
      { label: "STREAK", value: colors.semantic.streak },
      { label: "ERROR", value: colors.semantic.error },
      { label: "INFO", value: colors.semantic.info },
    ],
  },
  {
    title: "NEUTRALS",
    tokens: [
      { label: "TEXT / PRIMARY", value: colors.neutral.textPrimary },
      { label: "TEXT / SECONDARY", value: colors.neutral.textSecondary },
      { label: "BORDER", value: colors.neutral.border },
      { label: "SURFACE", value: colors.neutral.surface },
      { label: "BACKGROUND", value: colors.neutral.background },
    ],
  },
] as const;

export const typographyScale = [
  {
    name: "H1",
    usage: "Page / Screen Title",
    size: "32px",
    weight: "Bold",
    lineHeight: "1.2",
    previewClassName: "text-h1 font-poppins-bold text-text-primary",
  },
  {
    name: "H2",
    usage: "Section Title",
    size: "24px",
    weight: "SemiBold",
    lineHeight: "1.3",
    previewClassName: "text-h2 font-poppins-semibold text-text-primary",
  },
  {
    name: "H3",
    usage: "Card / Module Title",
    size: "20px",
    weight: "SemiBold",
    lineHeight: "1.3",
    previewClassName: "text-h3 font-poppins-semibold text-text-primary",
  },
  {
    name: "H4",
    usage: "Subheading",
    size: "16px",
    weight: "Medium",
    lineHeight: "1.4",
    previewClassName: "text-h4 font-poppins-medium text-text-primary",
  },
  {
    name: "Body Large",
    usage: "Important content",
    size: "16px",
    weight: "Regular",
    lineHeight: "1.6",
    previewClassName: "text-body-lg font-poppins-regular text-text-primary",
  },
  {
    name: "Body Medium",
    usage: "Body text",
    size: "14px",
    weight: "Regular",
    lineHeight: "1.6",
    previewClassName: "text-body-md font-poppins-regular text-text-primary",
  },
  {
    name: "Body Small",
    usage: "Supporting text",
    size: "13px",
    weight: "Regular",
    lineHeight: "1.6",
    previewClassName: "text-body-sm font-poppins-regular text-text-primary",
  },
  {
    name: "Caption",
    usage: "Labels, meta text",
    size: "11px",
    weight: "Regular",
    lineHeight: "1.4",
    previewClassName: "text-caption font-poppins-regular text-text-secondary",
  },
] as const;
