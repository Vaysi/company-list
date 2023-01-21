import {
    Autocomplete,
    Fab,
    FormControl,
    Grid,
    InputLabel,
    MenuItem,
    OutlinedInput,
    Select,
    TextField,
} from "@mui/material";
import React, {useCallback, useEffect, useMemo, useState} from "react";

import {Company} from "../../types";
import {RestartAlt} from "@mui/icons-material";

interface Props {
    data: Company[] | undefined;
    setFilteredData: any;
}

interface I_autoComplete {
    label: string;
    id: number;
}

const industryInitialState = {label: "Industries", id: 0};
const regionInitialState = {label: "HQ Region", id: 0};

function Filters({data, setFilteredData}: Props) {
    const industries = useMemo(() => {
        const out = data ? [...new Set(data.map((item) => item.Industry))].filter((item) => item) : [];
        return out.map((item, index) => ({label: item, id: index}));
    }, [data]);

    const regions = useMemo(() => {
        const out = data
            ? [...new Set(data.map((item) => item["HQ Region"]))].filter((item) => item)
            : [];
        return out.map((item, index) => ({label: item, id: index}));
    }, [data]);

    const [industry, setIndustry]: [I_autoComplete, any] =
        useState<I_autoComplete>(industryInitialState);
    const [region, setRegion]: [I_autoComplete, any] = useState<I_autoComplete>(regionInitialState);

    const [employeeOperator, setEmployeeOperator] = useState("=");
    const [employee, setEmployee] = useState("");

    const [rankOperator, setRankOperator] = useState("=");
    const [rank, setRank] = useState("");

    const showResetFilters = rank || employee || region.id !== 0 || industry.id !== 0;

    const filterByIndustry = useCallback(() => {
        setFilteredData(
            industry.label === industryInitialState.label
                ? data
                : data?.filter((item) => item.Industry === industry.label)
        );
    }, [industry, data, setFilteredData]);

    const filterByRegion = useCallback(() => {
        setFilteredData(
            region.label === regionInitialState.label
                ? data
                : data?.filter((item) => item["HQ Region"] === region.label)
        );
    }, [region, data, setFilteredData]);

    const filterByEmployee = useCallback(() => {
        if (employee) {
            let filteredData: any = [];
            switch (employeeOperator) {
                case "=":
                    filteredData = data?.filter((item) => item?.["Employee Count"] === parseInt(employee));
                    break;
                case ">":
                    filteredData = data?.filter((item) => item?.["Employee Count"] >= parseInt(employee));
                    break;
                case "<":
                    filteredData = data?.filter((item) => item?.["Employee Count"] <= parseInt(employee));
                    break;
            }
            setFilteredData(filteredData);
        }else {
            setFilteredData(data);
        }
    }, [employee, employeeOperator, data, setFilteredData]);

    const filterByRank = useCallback(() => {
        if (rank) {
            let filteredData: any = [];
            switch (rankOperator) {
                case "=":
                    filteredData = data?.filter((item) => item?.Rank === parseInt(rank));
                    break;
                case ">":
                    filteredData = data?.filter((item) => item?.Rank >= parseInt(rank));
                    break;
                case "<":
                    filteredData = data?.filter((item) => item?.Rank <= parseInt(rank));
                    break;
            }
            setFilteredData(filteredData);
        }else {
            setFilteredData(data);
        }
    }, [rank, rankOperator, data, setFilteredData]);

    const resetFilters = () => {
        setRank("");
        setEmployee("");
        setRegion(regionInitialState);
        setIndustry(industryInitialState);
        setRankOperator("=");
        setEmployeeOperator("=");
    }

    useEffect(() => {
        filterByIndustry();
    }, [filterByIndustry]);

    useEffect(() => {
        filterByRegion();
    }, [filterByRegion]);

    useEffect(() => {
        filterByEmployee();
    }, [filterByEmployee]);

    useEffect(() => {
        filterByRank();
    }, [filterByRank]);


    return (
        <Grid container sx={{px: 1}}>
            <Grid item xs={12} sm={6} md={3} sx={{pr: {xs: 0, sm: 1}}}>
                <FormControl
                    variant={"outlined"}
                    fullWidth={true}
                    sx={{my: {xs: 1, sm: 1, md: 1, lg: 0}}}
                >
                    <InputLabel htmlFor="filled-adornment-password">Employee Count</InputLabel>
                    <OutlinedInput
                        label={"Employee Count"}
                        value={employee}
                        onChange={(e) => setEmployee(e.target.value)}
                        endAdornment={
                            <Select
                                value={employeeOperator}
                                label="Age"
                                onChange={(e) => setEmployeeOperator(e.target.value)}
                                variant={"standard"}
                            >
                                <MenuItem value={"="}>Equal</MenuItem>
                                <MenuItem value={">"}>Greater</MenuItem>
                                <MenuItem value={"<"}>Lower</MenuItem>
                            </Select>
                        }
                        sx={{
                            "& .MuiOutlinedInput-notchedOutline": {
                                borderColor: employee ? "blue" : undefined
                            },
                        }}
                    />
                </FormControl>
            </Grid>
            <Grid item xs={12} sm={6} md={3} sx={{pr: {xs: 0, sm: 0,md:1}}}>
                <FormControl fullWidth={true} sx={{my: {xs: 1, sm: 1, md: 1, lg: 0}}}>
                    <InputLabel htmlFor="filled-adornment-password">Rank</InputLabel>
                    <OutlinedInput
                        label={"Rank"}
                        value={rank}
                        onChange={(e) => setRank(e.target.value)}
                        endAdornment={
                            <Select
                                value={rankOperator}
                                label="Operator"
                                onChange={(e) => setRankOperator(e.target.value)}
                                variant={"standard"}
                            >
                                <MenuItem value={"="}>Equal</MenuItem>
                                <MenuItem value={">"}>Greater</MenuItem>
                                <MenuItem value={"<"}>Lower</MenuItem>
                            </Select>
                        }
                        sx={{
                            "& .MuiOutlinedInput-notchedOutline": {
                                borderColor: rank ? "blue" : undefined
                            },
                        }}
                    />
                </FormControl>
            </Grid>
            <Grid item xs={12} sm={6} md={3} sx={{pr: {xs: 0, sm: 1}}}>
                <Autocomplete
                    placeholder={"Industries"}
                    options={industries}
                    value={industry}
                    onChange={(event, newValue) =>
                        newValue ? setIndustry(newValue) : setIndustry(industryInitialState)
                    }
                    renderInput={(params) => <TextField {...params} label="Industries"/>}
                    sx={{
                        my: {
                            xs: 1, sm: 1, md: 1, lg: 0, "& .MuiOutlinedInput-notchedOutline": {
                                borderColor: industry.id !== 0 ? "blue" : undefined
                            },
                        }
                    }}
                />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
                <Autocomplete
                    placeholder={"HQ Region"}
                    options={regions}
                    value={region}
                    onChange={(event, newValue) =>
                        newValue ? setRegion(newValue) : setRegion(regionInitialState)
                    }
                    renderInput={(params) => <TextField {...params} label="HQ Region"/>}
                    sx={{
                        my: {xs: 1, sm: 1, md: 1, lg: 0}, "& .MuiOutlinedInput-notchedOutline": {
                            borderColor: region.id !== 0 ? "blue" : undefined
                        },
                    }}
                />
            </Grid>
            {showResetFilters && (
                <Fab variant="extended" size="small" color="warning" sx={{
                    position: "fixed",
                    right: "1rem",
                    bottom: "1rem",
                    textTransform: "captalize"
                }} onClick={resetFilters}>
                    <RestartAlt sx={{ mr: 1 }} />
                    Reset Filters
                </Fab>
            )}
        </Grid>
    );
}

export default React.memo(Filters);
