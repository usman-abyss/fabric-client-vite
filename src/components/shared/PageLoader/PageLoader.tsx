import { LinearProgress, Stack } from "@mui/material";

type Props = {
  background?: "dark" | "light";
};

const getLogoPath = (color: string) =>
  `/assets/abyss_fabric_mini_logo_${color}.svg`;

export const PageLoader = ({ background = "light" }: Props) => {
  const assetPath = {
    dark: getLogoPath('white'),
    light: getLogoPath('black')
  };

  return (
    <Stack
      direction="column"
      sx={{
        height: "100%",
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <img
        src={assetPath[background] || assetPath.light}
        alt="Abyss Fabric"
        style={{ width: "67px", marginBottom: "30px" }}
      />
      <LinearProgress
        sx={{
          width: "200px",
          "& .MuiLinearProgress-colorPrimary": {
            backgroundColor: background === "light" ? "#9E9E9E" : "#C5C5C5",
          },
          "& .MuiLinearProgress-barColorPrimary": {
            backgroundColor: background === "light" ? "#000" : "#fff",
          },
        }}
      />
    </Stack>
  );
};
