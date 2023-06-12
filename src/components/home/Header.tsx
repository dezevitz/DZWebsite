import { Grid } from "@mui/material"
import React from "react"
import HeaderStyle from "../reusable/HeaderStyle"
import { INTRO } from "../../utils/strings"
import theme from "../../utils/theme"

function Header() { 
    return (
        <Grid 
            container 
            paddingTop='50px' 
            paddingBottom='50px'
            alignItems='center'
            justifyContent='center'
            spacing={2}
        >
            <Grid item xs={12} sm={6}>
                <HeaderStyle text={INTRO} textVariant="h1" color={theme.palette.primary.main} />
            </Grid>
            <Grid item xs={8} sm={4}>
                <img 
                    src="/images/profile.jpg" 
                    alt='Danielle Zevitz'
                    style={{
                        border: '5px solid',
                        borderRadius: '20px',
                        width: '90%',
                        borderColor: '#000000', // TODO: SET TO THEME COLOR
                        boxShadow: '10px 10px 10px rgba(0,0,0,0.25)'
                    }}
                />
            </Grid>
        </Grid>
    )
} 

export default Header