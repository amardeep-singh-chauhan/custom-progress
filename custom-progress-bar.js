import "./styles.css";
import { Box, LinearProgress, Typography, Stack } from "@mui/material";
import { styled } from "@mui/system";

const ProgressContainer = styled(Box)({
  position: "relative",
  width: "100%",
  maxWidth: 160,
});

const StyledProgressBar = styled(LinearProgress)({
  height: 10,
  borderRadius: 2,
  backgroundColor: "rgba(0, 0, 0, 0.08)",
  boxShadow: "rgba(58, 59, 66, 0.12) 0px 4px 4px inset",
  "& .MuiLinearProgress-bar": {
    backgroundColor: "rgb(30, 28, 82)",
  },
});

const ProgressIndicator = styled(Box)(({ value }) => ({
  position: "absolute",
  left: `${value}%`,
  transform: "translateX(-50%)",
  top: "-2rem",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
}));

const IndicatorCircle = styled(Box)({
  width: 12,
  height: 12,
  borderRadius: "50%",
  border: "3.5px solid rgb(76, 71, 204)",
  backgroundColor: "#fff",
});

const Marker = styled(Box)(({ position }) => ({
  position: "absolute",
  left: `${position}%`,
  top: "-5px",
  height: "20px",
  width: "18px",
  backgroundImage:
    "repeating-linear-gradient(-60deg, transparent 0px, transparent 3px, rgb(76, 71, 204) 3px, rgb(76, 71, 204) 4px)",
  borderLeft: "1.5px solid rgb(76, 71, 204)",
  borderRight: "1.5px solid rgb(76, 71, 204)",
  opacity: 0.5,
}));

const VerticalBar = styled(Box)({
  height: "5px",
  width: "1px",
  border: "1.5px solid rgb(76, 71, 204)",
  borderRadius: "1.5px",
  marginTop: "2px",
  backgroundColor: "rgb(76, 71, 204)",
});

const CustomProgressBar = ({ value, markerPosition, min = 50, max = 100 }) => {
  return (
    <Stack
      height="4rem"
      direction="row"
      alignItems="center"
      spacing={1}
      sx={{ width: "100%" }}
    >
      <Typography variant="body2">{min}</Typography>
      <ProgressContainer>
        <StyledProgressBar variant="determinate" value={value} />
        <Marker position={markerPosition} />
        <ProgressIndicator value={value}>
          <Typography
            variant="body2"
            sx={{ color: "rgb(76, 71, 204)", fontWeight: 500 }}
          >
            {Math.round(value)}
          </Typography>
          <VerticalBar />
          <IndicatorCircle />
        </ProgressIndicator>
      </ProgressContainer>
      <Typography variant="body2">{max}</Typography>
    </Stack>
  );
};

export default function App() {
  return <CustomProgressBar value={74} markerPosition={50} />;
}
