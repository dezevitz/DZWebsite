import React from "react"
import IconBoxStyle from "../reusable/IconBoxStyle"
import { Grid } from "@mui/material"

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
            <Grid item xs={6} sm={7} md={5} lg={4}>
                <IconBoxStyle 
                    iconPath="/images/linkedinIcon.png" 
                    iconLabel="LinkedIn"
                    onClick={() => {
                        window.open('https://www.linkedin.com/in/daniellezevitz/', '_blank');
                    }}
                ></IconBoxStyle>
            </Grid>
        </Grid>
    )
}

export default QuickLinks