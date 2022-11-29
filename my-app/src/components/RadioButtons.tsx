import {FormControlLabel, Grid, Radio, RadioGroup} from "@mui/material";
interface handleRadioButtons{
    handleRadioButtons:()=>void
}
const RadioButtons = ({handleRadioButtons}:handleRadioButtons)=>{
    return(
        <Grid sx={{ display: { xs: "none", md: "block" } }}>
            <RadioGroup
                onChange={handleRadioButtons}
                row
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue="movie"
                name="radio-buttons-group"
            >
                <FormControlLabel
                    value="movie"
                    control={
                        <Radio
                            size="small"
                            sx={{
                                color: "#fff",
                                "&.Mui-checked": {
                                    color: "#e70800",
                                },
                                "& .MuiSvgIcon-root": {
                                    fontSize: 18,
                                },
                            }}
                        />
                    }
                    label="Movie"
                    sx={{
                        opacity: "80%",
                        "& .MuiFormControlLabel-label": {
                            fontSize: "14px",
                        },
                    }}
                />
                <FormControlLabel
                    value="person"
                    control={
                        <Radio
                            size="small"
                            sx={{
                                color: "#fff",
                                "&.Mui-checked": {
                                    color: "#e70800",
                                },
                                "& .MuiSvgIcon-root": {
                                    fontSize: 18,
                                },
                            }}
                        />
                    }
                    label="Person"
                    sx={{
                        opacity: "80%",
                        "& .MuiFormControlLabel-label": {
                            fontSize: "14px",
                        },
                    }}
                />
            </RadioGroup>
        </Grid>
    )
}

export default RadioButtons