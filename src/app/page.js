import Image from "next/image";
import styles from "./page.module.css";
import React from 'react'
import {Grid} from '@mui/material';
import Sidebar from "./components/Sidebar";
import Main from "./components/MainContainted";
export default function Home() {
  return (
    <div>
    
    <Grid container style={{ minHeight: '80vh' }}>
      <Grid item style={{ width: '200px' }}>
        <Sidebar />
      </Grid>
      <Grid item style={{ flexGrow: 1 }}>
        <Main/>
      </Grid>
    </Grid>
   
 
  </div>
);
 
}
