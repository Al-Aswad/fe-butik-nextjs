import Head from 'next/head';
import Link from 'next/link';
import { TabContext, TabPanel } from "@mui/lab";
import React, { useState } from 'react';
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Product from '../components/Product/Product';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

export default function Home() {
    const [value, setValue] = useState("2");

    const handleChangeTab = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div>
            <Head>
                <title>
                    Butik Zahrazhafira
                </title>
                <meta name="description" content="Dapatkan gaun terbaik mu" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Header />

            <main className="pt-[70px] mb-8">

                <TabContext value={value}>
                    <Box
                        sx={{ width: "100%" }}
                        className="sticky top-[70px] z-30 pb-1 mb-2 bg-white"
                    >
                        <Tabs value={value} onChange={handleChangeTab} centered>
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
                    <TabPanel value="1">
                        Item 1
                    </TabPanel>
                    <TabPanel value="2">
                        <div className="z-20 w-full p-2 mx-auto sm:p-0 lg:w-3/4">
                            <div className="flex flex-wrap justify-center w-full gap-4 px-2 pt-4 md:gap-4">
                                <Product />
                                <Product />
                                <Product />
                                <Product />
                                <Product />
                                <Product />
                                <Product />
                                <Product />
                                <Product />
                                <Product />
                                <Product />
                                <Product />
                                <Product />
                                <Product />
                                <Product />
                            </div>
                        </div>
                    </TabPanel>
                    <TabPanel value="3">
                        Item Three
                    </TabPanel>
                </TabContext>

                <div className="flex items-center justify-center w-full">
                    <button className="px-4 py-2 bg-gray-800 rounded-sm text-slate-100">
                        More
                    </button>
                </div>

            </main>
            <Footer />
        </div>
    );
}
