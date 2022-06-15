import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { useState } from "react";
import { TabContext, TabPanel } from "@mui/lab";
import Product from "../Product/Product";

export default function CenteredTabs() {
    const [value, setValue] = useState("2");

    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        setValue(newValue);
    };

    return (
        <TabContext value={value}>
            <Box
                sx={{ width: "100%" }}
                className="sticky top-[70px] z-30 pb-1 mb-2 bg-white"
            >
                <Tabs value={value} onChange={handleChange} centered>
                    <Tab
                        sx={{ borderBottom: 0.5, borderColor: "divider" }}
                        className="font-sans text-sm font-semibold border-b-2 lg:w-1/4 outline-2"
                        label="Kategori"
                        value="1"
                    />
                    <Tab
                        sx={{ borderBottom: 0.5, borderColor: "divider" }}
                        className="font-sans text-sm font-semibold border-b-2 lg:w-1/4"
                        label="Semua produk"
                        value="2"
                    />
                    <Tab
                        sx={{ borderBottom: 0.5, borderColor: "divider" }}
                        className="font-sans text-sm font-semibold border-b-2 lg:w-1/4"
                        label="diskon"
                        value="3"
                    />
                </Tabs>
            </Box>
            <TabPanel value="1">Item 1</TabPanel>
            <TabPanel value="2">
                <div className="z-20 w-full p-2 mx-auto sm:p-0 lg:w-3/4">
                    <div className="flex flex-wrap justify-center w-full gap-2 px-2 pt-4 md:gap-4">
                        <Product></Product>
                        <Product></Product>
                        <Product></Product>
                        <Product></Product>
                        <Product></Product>
                        <Product></Product>
                        <Product></Product>
                        <Product></Product>
                        <Product></Product>
                        <Product></Product>
                        <Product></Product>
                    </div>
                </div>
            </TabPanel>
            <TabPanel value="3">Item Three</TabPanel>
        </TabContext>
    );
}
