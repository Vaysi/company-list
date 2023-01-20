import { Groups } from "@mui/icons-material";
import { Box, Button, Typography } from "@mui/material";
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
import { Line } from "react-chartjs-2";

import { Company } from "../../../types";

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
};

const labels = ["Monthly", "2 Months", "3 Months", "4 Months", "5 Months", "6 Months"];

function SocialTab({ selectedCompany }: { selectedCompany: Company | null }) {
  const data = {
    labels,
    datasets: [
      {
        label: "Employee",
        data: selectedCompany?.["Employee Count"]
          ? [
              selectedCompany?.["Employees - Monthly Growth"],
              selectedCompany?.["Employees - 2 Months Growth"],
              selectedCompany?.["Employees - 3 Months Growth"],
              selectedCompany?.["Employees - 4 Months Growth"],
              selectedCompany?.["Employees - 5 Months Growth"],
              selectedCompany?.["Employees - 6 Months Growth"],
            ]
          : [],
        borderColor: "rgb(0,119,181)",
        backgroundColor: "rgba(0,119,181, 0.5)",
      },
    ],
  };

  return (
    <Box>
      <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", mt: 3 }}>
        {selectedCompany?.["Employee Count"] ? (
          <Button
            sx={{ textTransform: "capitalize" }}
            variant="outlined"
            size={"small"}
            startIcon={<Groups />}
          >
            {selectedCompany?.["Employee Count"].toLocaleString("en-US")} Employee
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
        Employee Growth (Based on Month)
      </Typography>
      <Line options={options} data={data} />
    </Box>
  );
}

export default SocialTab;
