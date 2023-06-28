import React from "react"
import IconBoxStyle from "../reusable/IconBoxStyle"
import { Grid } from "@mui/material"
import { LINKEDIN } from "../../utils/strings";

function QuickLinks() {
    return (
        <Grid container
            alignItems="center"
            justifyContent="center"
            sx={{
            backgroundColor: (theme) => theme.palette.primary.main,
            border: '5px solid',
            borderColor: (theme) => theme.palette.common.black,
            borderRadius: '20px',
            boxShadow: '10px 10px 10px rgba(0,0,0,0.25)',
            padding: '10px'
            }}
        >
            <Grid item xs={4} md={3}>
                <IconBoxStyle 
                    iconPath="/images/cvIcon.png" 
                    iconLabel="Resume"
                    onClick={() => {
                        window.open('/resume', '_self');
                    }}
                    color="#3366CC"
                ></IconBoxStyle>
            </Grid>
            <Grid item xs={4} md={3}>
                <IconBoxStyle 
                    iconPath="/images/gmailIcon.png" 
                    iconLabel="Gmail"
                    onClick={() => {
                        window.open('mailto:dezevitz@gmail.com', '_blank');
                    }}
                    color="#FF0000"
                ></IconBoxStyle>
            </Grid>
            <Grid item xs={4} md={3}>
                <IconBoxStyle 
                    iconPath="/images/linkedinIcon.png" 
                    iconLabel="LinkedIn"
                    onClick={() => {
                        window.open(LINKEDIN, '_blank', "noopener noreferrer");
                    }}
                ></IconBoxStyle>
            </Grid>
        </Grid>
    )
}

export default QuickLinks