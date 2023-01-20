import {Avatar, Box, Button, Card, CardActions, CardContent, CardHeader, Chip, Grid, Typography} from "@mui/material";
import {Company} from "../../types";
import {red} from "@mui/material/colors";
import {AttachMoney, LocationOn, Person} from "@mui/icons-material";
import {excerpt} from "../../utils/helpers";
import ActionButton from "./actionButtons";
import React from "react";

function Item({item, setSelectedCompany}: { item: Company, setSelectedCompany: any }) {
    return (
        <Grid item xs={12} sm={6} md={4} lg={3} sx={{my: 1}}>
            <Card sx={{mx: 1, height: "100%"}}>
                <CardHeader
                    avatar={
                        <Avatar sx={{bgcolor: red[500]}} aria-label="recipe">
                            {item.Rank}
                        </Avatar>
                    }
                    title={item["Company Name"]}
                    subheader={item.Industry}
                    titleTypographyProps={{fontWeight: "bold"}}
                    action={
                        <Typography>
                            <Typography sx={{fontSize: 11}}>Since</Typography>
                            <Typography variant={"subtitle2"} fontWeight={"bold"}
                                        color={"primary"}>{item["Founded Date"]}</Typography>
                        </Typography>
                    }
                    sx={{alignItem: "center"}}
                />
                <CardContent sx={{py: 0}}>
                    <Box sx={{textAlign: "center"}}>
                        <Chip size={"small"} icon={<Person/>} label={`${item["Employee Count"]} Employee`}
                              variant="outlined" sx={{mr: 1}} color={"primary"}/>
                        <Chip size={"small"} icon={<AttachMoney/>} label={`${item["Number of Investors"]} Investors`}
                              variant="outlined" color={"secondary"}/>
                    </Box>
                    <Typography variant="body2" sx={{display: "flex", alignItems: "center", mt: 1}}
                                color="text.secondary">
                        <LocationOn sx={{fontSize: 16, mr: 1}}/>
                        {excerpt(item["HQ Location"], 35)}
                    </Typography>
                </CardContent>
                <CardActions disableSpacing sx={{justifyContent: "center"}}>
                    <ActionButton item={item}/>
                </CardActions>
                <Button className={"no-top-radius"} color={"primary"} fullWidth={true}
                        sx={{textTransform: "capitalize", display: "block", flex: 1}} variant={"contained"}
                        onClick={() => setSelectedCompany(item)}>
                    More Details
                </Button>
            </Card>
        </Grid>
    );
}

export default Item;
