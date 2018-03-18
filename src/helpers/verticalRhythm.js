/* eslint-disable import/prefer-default-export */
export const lineHeight = (size = "base") => {
  switch (size) {
    case "sm":
      return 1.8333;
    case "md":
      return 1.0313;
    case "lg":
      return 1.0313;
    default:
      return 1.5;
  }
};
