import {Google, Instagram, LinkedIn, MusicNote, Twitter} from "@mui/icons-material";
import {Box, Button, Typography} from "@mui/material";
import {
    CategoryScale,
    Chart as ChartJS,
    Filler,
    Legend,
    LinearScale,
    LineElement,
    PointElement,
    Title,
    Tooltip,
} from "chart.js";
import React from "react";
import {Line} from "react-chartjs-2";

import {Company} from "../../../types";

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
    Legend
);

export const options = {
    responsive: true,
    plugins: {
        legend: {
            position: "top" as const,
        },
        title: {
            display: false,
        },
    },
    maintainAspectRatio: true
};

const labels = ["Monthly", "2 Months", "3 Months", "4 Months", "5 Months", "6 Months"];

function SocialTab({selectedCompany}: { selectedCompany: Company | null }) {
    const data = {
        labels,
        datasets: [
            {
                label: "Linkedin",
                data: selectedCompany?.["LinkedIn - URL"]
                    ? [
                        selectedCompany?.["LinkedIn - Monthly Followers Growth"],
                        selectedCompany?.["LinkedIn - 2 Months Followers Growth"],
                        selectedCompany?.["LinkedIn - 3 Months Followers Growth"],
                        selectedCompany?.["LinkedIn - 4 Months Followers Growth"],
                        selectedCompany?.["LinkedIn - 5 Months Followers Growth"],
                        selectedCompany?.["LinkedIn - 6 Months Followers Growth"],
                    ]
                    : [],
                borderColor: "rgb(0,119,181)",
                backgroundColor: "rgba(0,119,181, 0.5)",
            },
            {
                label: "Web Visits",
                data: selectedCompany?.["Web Visits"]
                    ? [
                        selectedCompany?.["Web Visits - Monthly Growth"],
                        selectedCompany?.["Web Visits - 2 Months Growth"],
                        selectedCompany?.["Web Visits - 3 Months Growth"],
                        selectedCompany?.["Web Visits - 4 Months Growth"],
                        selectedCompany?.["Web Visits - 5 Months Growth"],
                        selectedCompany?.["Web Visits - 6 Months Growth"],
                    ]
                    : [],
                borderColor: "rgb(244, 67, 54)",
                backgroundColor: "rgba(244, 67, 54, 0.5)",
            },
            {
                label: "Twitter",
                data: selectedCompany?.["Twitter - URL"]
                    ? [
                        selectedCompany?.["Twitter - Monthly Followers Growth"],
                        selectedCompany?.["Twitter - 2 Months Followers Growth"],
                        selectedCompany?.["Twitter - 3 Months Followers Growth"],
                        selectedCompany?.["Twitter - 4 Months Followers Growth"],
                        selectedCompany?.["Twitter - 5 Months Followers Growth"],
                        selectedCompany?.["Twitter - 6 Months Followers Growth"],
                    ]
                    : [],
                borderColor: "rgb(29, 161, 242)",
                backgroundColor: "rgba(29, 161, 242, 0.5)",
            },
            {
                label: "Instagram",
                data: selectedCompany?.["Instagram - URL"]
                    ? [
                        selectedCompany?.["Instagram - Monthly Followers Growth"],
                        selectedCompany?.["Instagram - 2 Months Followers Growth"],
                        selectedCompany?.["Instagram - 3 Months Followers Growth"],
                        selectedCompany?.["Instagram - 4 Months Followers Growth"],
                        selectedCompany?.["Instagram - 5 Months Followers Growth"],
                        selectedCompany?.["Instagram - 6 Months Followers Growth"],
                    ]
                    : [],
                borderColor: "rgb(247,119,55)",
                backgroundColor: "rgba(247,119,55, 0.5)",
            },
            {
                label: "Google Play",
                data: selectedCompany?.["Google Play - URL"]
                    ? [
                        selectedCompany?.["Google Play - Monthly Reviews Growth"],
                        selectedCompany?.["Google Play - 2 Months Reviews Growth"],
                        selectedCompany?.["Google Play - 3 Months Reviews Growth"],
                        selectedCompany?.["Google Play - 4 Months Reviews Growth"],
                        selectedCompany?.["Google Play - 5 Months Reviews Growth"],
                        selectedCompany?.["Google Play - 6 Months Reviews Growth"],
                    ]
                    : [],
                borderColor: "rgb(76, 175, 80)",
                backgroundColor: "rgba(76, 175, 80, 0.5)",
            },
        ],
    };

    return (
        <Box>
            <Box sx={{display: "flex", justifyContent: "space-around", alignItems: "center", mt: 3,flexWrap:"wrap"}}>
                {selectedCompany?.["LinkedIn - Followers"] ? (
                    <Button
                        sx={{textTransform: "capitalize",m:1}}
                        variant="outlined"
                        size={"small"}
                        startIcon={<LinkedIn/>}
                    >
                        {selectedCompany?.["LinkedIn - Followers"].toLocaleString("en-US")} Followers
                    </Button>
                ) : null}
                {selectedCompany?.["Twitter - Followers"] ? (
                    <Button
                        sx={{textTransform: "capitalize",m:1}}
                        variant="outlined"
                        color={"info"}
                        size={"small"}
                        startIcon={<Twitter/>}
                    >
                        {selectedCompany?.["Twitter - Followers"].toLocaleString("en-US")} Followers
                    </Button>
                ) : null}
                {selectedCompany?.["Instagram - Followers"] ? (
                    <Button
                        sx={{textTransform: "capitalize",m:1}}
                        variant="outlined"
                        color={"warning"}
                        size={"small"}
                        startIcon={<Instagram/>}
                    >
                        {selectedCompany?.["Instagram - Followers"].toLocaleString("en-US")} Followers
                    </Button>
                ) : null}
                {selectedCompany?.["Google Play - Reviews"] ? (
                    <Button
                        sx={{textTransform: "capitalize",m:1}}
                        variant="outlined"
                        color={"success"}
                        size={"small"}
                        startIcon={<Google/>}
                    >
                        {selectedCompany?.["Google Play - Reviews"].toLocaleString("en-US")} Reviews
                    </Button>
                ) : null}
                {selectedCompany?.["iTunes - Reviews"] ? (
                    <Button
                        sx={{textTransform: "capitalize",m:1}}
                        variant="outlined"
                        color={"primary"}
                        size={"small"}
                        startIcon={<MusicNote/>}
                    >
                        {selectedCompany?.["iTunes - Reviews"].toLocaleString("en-US")} iTunes Reviews
                    </Button>
                ) : null}
            </Box>
            <Typography
                sx={{
                    justifyContent: "center",
                    fontWeight: "bold",
                    my: 2,
                    display: "flex",
                    alignItems: "center",
                    mt: 5,
                }}
            >
                Social Media Growth (Based on Month)
            </Typography>
            <Line options={options} data={data}/>
        </Box>
    );
}

export default SocialTab;
