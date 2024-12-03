import MenuAll from "../components/MenuAll"
import {useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { RootState } from '../store/index'
import { useEffect, useState } from 'react';
import InformeColeccion from '../components/InformeColeccion'
import Button from "@mui/material/Button";
import React from "react";
import Grid from "@mui/material/Grid2";
import InformeUsuario from "../components/InformeUsuario";



function Reports() {

  const userData = useSelector((state: RootState) => state.authenticator)
  const navigate = useNavigate()
  const isLoggedin = userData.isAutenticated
    useEffect(() => {
    if (!isLoggedin) {
    navigate('/')
    }
    }, [isLoggedin, navigate]) /*Array de dependencia si cambia el login utilzia el navigate*/

    const [tableData, setTableData] = useState([])
    const [open, setOpen] = React.useState(false);
    const [tableDataUser, setTableDataUser] = useState([])
    const [openUser, setOpenUser] = React.useState(false);
    
    const openForm =()=>{
      setOpen(true)
      fetch(`http://localhost:3030/getItems`)
      .then(response => response.json())
        .then(response => {
        console.log(response.data)
        setTableData(response.data)
          })
          };
   const openReportUser =()=>{
      setOpenUser(true)
      fetch(`http://localhost:3030/getItemsUser`)
      .then(response => response.json())
        .then(response => {
        console.log(response.data)
        setTableDataUser(response.data)
          })
          };       

    return (
        <>
        <MenuAll></MenuAll>
        <Grid container sx={{ display:'flex' ,justifyContent:'center'}}>
        <Button variant="outlined" type="submit"  sx={{backgroundColor:"primary.main",color:"white" ,mt:2,textAlign:'center',mb:2}} onClick={openForm}>InfomreColeccion</Button>
        </Grid>
       {open &&(<InformeColeccion tableData={tableData}></InformeColeccion>)}
       <Grid container sx={{ display:'flex' ,justifyContent:'center'}}>
        <Button variant="outlined" type="submit"  sx={{backgroundColor:"primary.main",color:"white" ,mt:2,textAlign:'center',mb:2}} onClick={openReportUser}>InformeUsuarios</Button>
        </Grid>
       {openUser &&(<InformeUsuario tableData={tableDataUser}></InformeUsuario>)}
        </>


    )
  }
export default Reports