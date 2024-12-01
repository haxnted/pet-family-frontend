import GroupsIcon from "@mui/icons-material/Groups";
import HouseIcon from "@mui/icons-material/House";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import React from "react";
import { useNavigate } from "react-router-dom";

interface TabPanelProps {
	children?: React.ReactNode;
	index: number;
	value: number;
}

function CustomTabPanel(props: TabPanelProps) {
	const { children, value, index, ...other } = props;

	return (
		<div
			role="tabpanel"
			hidden={value !== index}
			id={`simple-tabpanel-${index}`}
			aria-labelledby={`simple-tab-${index}`}
			{...other}
		>
			{value === index && <Box sx={{ p: 3 }}>{children}</Box>}
		</div>
	);
}

function GetProps(index: number) {
	return {
		id: `simple-tab-${index}`,
		"aria-controls": `simple-tabpanel-${index}`,
	};
}

export default function MainNavBar() {
	const [value, setValue] = React.useState(0);
	const navigate = useNavigate();
	const handleChange = (event: React.SyntheticEvent, newValue: number) => {
		setValue(newValue);
		switch (newValue) {
			case 0:
				navigate("/");
				break;
			case 1:
				navigate("/volunteers");
				break;
			case 2:
				navigate("/help-pets");
				break;
			default:
				break;
		}
	};

	return (
		<Box sx={{ width: "100%" }}>
			<Box sx={{ borderBottom: 1, borderColor: "divider" }}>
				<Tabs
					value={value}
					onChange={handleChange}
					aria-label="basic tabs example"
					sx={{
						"& .MuiTabs-indicator": {
							backgroundColor: "orange",
						},
					}}
				>
					<Tab
						label={
							<div className="flex items-center">
								<HouseIcon className="mr-2" />
								Главная
							</div>
						}
						{...GetProps(0)}
						sx={{
							"&.Mui-selected": {
								color: "orange",
							},
						}}
					/>
					<Tab
						label={
							<div className="flex items-center">
								<GroupsIcon className="mr-2" />
								Волонтеры
							</div>
						}
						{...GetProps(1)}
						sx={{
							"&.Mui-selected": {
								color: "orange",
							},
						}}
					/>
					<Tab
						label={
							<div className="flex items-center">
								<MonetizationOnIcon className="mr-2" />
								Помощь животным
							</div>
						}
						{...GetProps(2)}
						sx={{
							"&.Mui-selected": {
								color: "orange",
							},
						}}
					/>
				</Tabs>
			</Box>
		</Box>
	);
}
