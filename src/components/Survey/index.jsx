import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  FormControl,
  FormControlLabel,
  FormLabel,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Radio,
  RadioGroup,
  Rating,
  Select,
  Stack,
  Typography,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import useLocalStorage from "hooks/useLocalStorage";

import stallData from "assets/stalls.json";
import { isDashboardEnabled } from "components/VersionCheck";
import { fetchValue, saveValue } from "services/Firebase";

const getStyles = (name, list, theme) => ({
  fontWeight:
    list.indexOf(name) === -1
      ? theme.typography.fontWeightRegular
      : theme.typography.fontWeightMedium,
});

const reasonList = [
  { name: "Crowd", desc: "Too crowded" },
  { name: "Variety", desc: "Not enough variety" },
  { name: "Seats", desc: "Not enough seats" },
  { name: "Bored", desc: "Wanted to try something new" },
  { name: "Vibes", desc: "Not feeling it" },
];

const labels = {
  1: "Strongly Disagree",
  2: "Disagree",
  3: "Neutral",
  4: "Agree",
  5: "Strongly Agree",
};

export default function Survey({ trackClick, surveyOpen, completeSurvey }) {
  const navigate = useNavigate();
  const theme = useTheme();
  const [userCode] = useLocalStorage("userCode", "");

  const [choiceState, setChoiceState] = useState(-1);
  const [location, setLocation] = useState("");
  const [stalls, setStalls] = useState([]);
  const [reasons, setReasons] = useState([]);
  const [usefulRating, setUsefulRating] = useState(3);
  const [seatRating, setSeatRating] = useState(3);

  const [endTime, setEndTime] = useLocalStorage("endTime", -1);
  const [, setLunchPlace] = useLocalStorage("lunchPlace", "");
  const [, setSecondary] = useLocalStorage("secondAnswer", "");
  const [, setUseful] = useLocalStorage("featuresUseful", -1);
  const [, setHelpful] = useLocalStorage("seatUseful", -1);

  const handleSubmitExit = () => {
    trackClick("submit-exit-attempt");
  };

  const handleSubmit = async () => {
    trackClick("submit-button");
    completeSurvey();
    setUseful(usefulRating);
    setHelpful(seatRating);
    setEndTime(Date.now());
  };

  const handleRadioChange = (event) => {
    setLocation(event.target.value);
  };

  const handleNext1 = (event) => {
    event.preventDefault();
    trackClick("survey-next-1");
    setLunchPlace(location);
    if (location === "canteen") {
      setChoiceState(0);
    } else {
      setChoiceState(1);
    }
  };

  const handleNext2 = (event) => {
    event.preventDefault();
    trackClick("survey-next-2");
    setSecondary([...stalls, ...reasons]);
    setChoiceState(2);
  };

  const handleSelectChange = (event, type) => {
    const {
      target: { value },
    } = event;
    if (type === "stalls")
      setStalls(typeof value === "string" ? value.split(",") : value);
    else setReasons(typeof value === "string" ? value.split(",") : value);
  };

  useEffect(() => {
    if (endTime !== -1) navigate("/end");
  }, [endTime, navigate]);

  return (
    <>
      <Dialog
        open={surveyOpen && choiceState === -1}
        onClose={handleSubmitExit}
      >
        <DialogTitle>Survey</DialogTitle>
        <DialogContent dividers>
          <DialogContentText gutterBottom variant="body2">
            Tell us what you've decided!
          </DialogContentText>

          <FormControl variant="standard">
            <FormLabel id="lunchplace-radios">My lunch will be at...</FormLabel>
            <RadioGroup
              aria-labelledby="lunchplace-radios"
              name="lunchplace"
              row
              value={location}
              onChange={handleRadioChange}
            >
              <FormControlLabel
                value="canteen"
                control={<Radio />}
                label="SUTD Canteen"
              />
              <FormControlLabel
                value="restaurants"
                control={<Radio />}
                label="Other SUTD options"
              />
              <FormControlLabel
                value="outside"
                control={<Radio />}
                label="Outside SUTD"
              />
            </RadioGroup>
          </FormControl>
        </DialogContent>
        <DialogActions>
          <Button
            type="submit"
            color="primary"
            onClick={handleNext1}
            disabled={!location}
          >
            Next
          </Button>
        </DialogActions>
      </Dialog>

      <Dialog
        open={surveyOpen && (choiceState === 0 || choiceState === 1)}
        onClose={handleSubmitExit}
      >
        <DialogTitle>Survey</DialogTitle>
        <DialogContent dividers>
          <DialogContentText variant="body2" gutterBottom>
            Tell us what you've decided!
          </DialogContentText>

          {!choiceState ? (
            <>
              <DialogContentText gutterBottom>
                I will be purchasing from the stall(s)...
              </DialogContentText>
              <FormControl
                sx={{
                  width: "100%",
                  mt: 2,
                }}
              >
                <InputLabel id="canteen-select-label">Stalls</InputLabel>
                <Select
                  labelId="canteen-select-label"
                  id="canteen-select"
                  multiple
                  value={stalls}
                  onChange={(e) => handleSelectChange(e, "stalls")}
                  autoWidth
                  error={stalls.length === 0}
                  input={<OutlinedInput label="Stalls" />}
                >
                  {stallData.map((stall) => (
                    <MenuItem
                      key={stall.name}
                      value={stall.name}
                      style={getStyles(stall.name, stalls, theme)}
                    >
                      {stall.name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </>
          ) : (
            <>
              <DialogContentText gutterBottom>
                I will not be visiting the canteen because...
              </DialogContentText>
              <FormControl
                sx={{
                  width: "100%",
                  mt: 2,
                }}
              >
                <InputLabel id="canteen-select-label">Reason</InputLabel>
                <Select
                  labelId="reason-select-label"
                  id="reason-select"
                  multiple
                  value={reasons}
                  onChange={(e) => handleSelectChange(e, "reasons")}
                  autoWidth
                  error={reasons.length === 0}
                  input={<OutlinedInput label="Reason" />}
                >
                  {reasonList
                    .filter(
                      (reason) =>
                        !(
                          !isDashboardEnabled(userCode) &&
                          reason.name === "Seats"
                        )
                    )
                    .map((reason) => (
                      <MenuItem
                        key={reason.name}
                        value={reason.name}
                        style={getStyles(reason.name, reasons, theme)}
                      >
                        {reason.desc}
                      </MenuItem>
                    ))}
                </Select>
              </FormControl>
            </>
          )}
        </DialogContent>
        <DialogActions>
          <Button
            type="submit"
            color="primary"
            onClick={handleNext2}
            disabled={
              (choiceState === 0 && stalls.length === 0) ||
              (choiceState === 1 && reasons.length === 0)
            }
          >
            Next
          </Button>
        </DialogActions>
      </Dialog>

      <Dialog open={surveyOpen && choiceState === 2} onClose={handleSubmitExit}>
        <DialogTitle>Survey</DialogTitle>
        <DialogContent dividers>
          <DialogContentText gutterBottom variant="body2">
            Give us your feedback!
          </DialogContentText>

          <DialogContentText gutterBottom>
            The information provided was useful in making my decision...
          </DialogContentText>

          <Stack
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "left",
              marginBottom: "1dvh",
            }}
          >
            <Rating
              name="rating"
              defaultValue={3}
              max={5}
              onChange={(e, v) => setUsefulRating(v)}
              sx={{ pr: 2 }}
            />
            {usefulRating !== null && (
              <Typography sx={{ fontSize: 16 }}>
                {labels[usefulRating]}
              </Typography>
            )}
          </Stack>

          <DialogContentText gutterBottom>
            {isDashboardEnabled(userCode)
              ? "The presence of seat availability was useful in making my decision..."
              : "It would be useful to have seat availability information..."}
          </DialogContentText>

          <Stack
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "left",
            }}
          >
            <Rating
              name="rating"
              defaultValue={3}
              max={5}
              onChange={(e, v) => setSeatRating(v)}
              sx={{ pr: 2 }}
            />
            {seatRating !== null && (
              <Typography sx={{ fontSize: 16 }}>
                {labels[seatRating]}
              </Typography>
            )}
          </Stack>
        </DialogContent>
        <DialogActions>
          <Button type="submit" color="primary" onClick={handleSubmit}>
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
