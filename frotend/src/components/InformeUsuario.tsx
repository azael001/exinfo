import React, { useEffect } from "react";
//importo la librería de informes
import MaterialTable from "@material-table/core";
//Importo la librería que nos permite exportar a CSV y PDF
import { ExportCsv, ExportPdf } from "@material-table/exporters";
import { Column } from "@material-table/core";
import { useState } from "react";
//Creo la interfaz para los tipos de los campos (field) de la tabla.
//La tabla tendrá los campos firstName: string, lastName: string, birthYear: number
interface usuarios {
 nombre: string;
 login: string;
 password: string,
 rol: number;
}
function InformeUsuario({tableData}: {tableData:any[]}){
  
 const col: Array<Column<usuarios>> = [
 { title: "Nombre", field: "nombre" , filtering: true},
 { title: "Login", field: "login",filtering: false },
 { title: "Password", field: "password",filtering: false },
 { title: "Rol", field: "rol",filtering: false }
 ];

return (
<MaterialTable columns={col} data={tableData} title={"Informe de Usuarios"}
options={{
    draggable: true,
    columnsButton: true,
    filtering: true,
    rowStyle: {
        background:'#5f43d6',
        color:'white'
    },
    headerStyle: {
        backgroundColor: '#1f0a7b',
        color: 'white'},
    exportMenu: [
        {
            label: "Exportar a PDF",
            exportFunc: (cols, datas) => ExportPdf(cols, datas, "myPdfFileName"),
            }, 
            {
                label: "Exportar a CSV",
                exportFunc: (cols, datas) => ExportCsv(cols, datas, "myCsvFileName"),
                },],
        }}/>

)
}
export default InformeUsuario