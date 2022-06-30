import React from 'react'
import './css/EDA.css'

function EDA() {
    return (
        <div className='EDA-main container'>
            <div>
                <div style={{ AwHeaderfooterType: 'header-primary', clear: 'both' }}>
                    <p style={{ marginLeft: '36pt' }}><span style={{ AwImport: 'ignore' }}>&nbsp;</span></p>
                </div>
                <h2 style={{ textAlign: 'center' }}><span style={{ fontWeight: 'bold' }}>EXPLORATORY DATA ANALYSIS AND FE MOCKUP</span></h2>
                <p style={{ textAlign: 'center' }}><span style={{ fontWeight: 'bold', AwImport: 'ignore' }}>&nbsp;</span></p>
                <p><span style={{ fontWeight: 'bold' }}>DATABASE RELATIONSHIP (Used up to this stage)</span></p>
                <p><img className='img-fluid' src="/images/databaseRelationship.jpg" alt="" style={{ AwLeftPos: '0pt', AwRelHpos: 'column', AwRelVpos: 'paragraph', AwTopPos: '0pt', AwWrapType: 'inline' }} />
                </p>
            </div><br style={{ pageBreakBefore: 'always', clear: 'both', msoBreakType: 'section-break' }} />
            <div>
                <div style={{ AwHeaderfooterType: 'linked', clear: 'both' }}>
                    <p style={{ marginLeft: '36pt' }}><span style={{ AwImport: 'ignore' }}>&nbsp;</span></p>
                </div>
                <p style={{ textAlign: 'justify' }}><span style={{ fontWeight: 'bold' }}>ORIGIN-DESTINATION MATRIX:</span><span> This is the
                    main file of the project that contains an Origin-Destination Matrix (described before). Of all available
                    dates, October 26 is chosen since it is the date that matches the time records of the “stop_times”
                    file.</span></p>
                <p style={{ textAlign: 'justify' }}><span style={{ AwImport: 'ignore' }}>&nbsp;</span></p>
                <p style={{ textAlign: 'justify' }}><span style={{ fontWeight: 'bold' }}>Database at a glance: </span><span>Overall, the
                    database includes 2.962.727 rows and 17 columns. Main statistics are shown below:</span></p>
                <p style={{ textAlign: 'justify' }}><span style={{ AwImport: 'ignore' }}>&nbsp;</span></p>
                <p style={{ textAlign: 'center' }}><img className='img-fluid' src="images/databaseAtAGlance.png" alt="" style={{ AwLeftPos: '0pt', AwRelHpos: 'column', AwRelVpos: 'paragraph', AwTopPos: '0pt', AwWrapType: 'inline' }} />
                </p>
                <p><span style={{ AwImport: 'ignore' }}>&nbsp;</span></p>
                <ol type={1} style={{ margin: '0pt', paddingLeft: '0pt' }}>
                    <li style={{ marginLeft: '32.17pt', paddingLeft: '3.83pt', fontWeight: 'bold' }}><span>FORMAT</span><span style={{ fontWeight: 'normal' }}> : all databases are “.csv” files and GTFS formats. GTFS is a standard
                        data format to store traffic information.</span></li>
                    <li style={{ marginLeft: '32.17pt', paddingLeft: '3.83pt', fontWeight: 'bold' }}><span>CONSISTENCY</span></li>
                </ol>
                <p style={{ marginLeft: '36pt', textAlign: 'justify', lineHeight: '115%', fontSize: '12pt' }}><span style={{ lineHeight: '115%', fontSize: '11pt', fontWeight: 'bold', fontStyle: 'italic', backgroundColor: '#ffffff' }}>Data
                    type consistency:</span><span style={{ fontWeight: 'bold', fontStyle: 'italic', backgroundColor: '#ffffff' }}>
                    </span><span style={{ lineHeight: '115%', fontSize: '11pt' }}>In the initial exploration stage, it was observed data
                        with unexpected formatting. Therefore, adjustments were made as illustrated in the following
                        chart:</span></p>
                <p style={{ marginLeft: '36pt' }}><span style={{ AwImport: 'ignore' }}>&nbsp;</span></p>
                <table cellSpacing={0} cellPadding={0} className="Table1" style={{ width: '414.5pt', marginLeft: 'auto', marginRight: 'auto', border: '0.75pt solid #202124', AwBorder: '0.5pt single', AwBorderInsideh: '0.5pt single #202124', AwBorderInsidev: '0.5pt single #202124', borderCollapse: 'collapse' }}>
                    <thead>
                        <tr>
                            <td style={{ borderRight: '0.75pt solid #202124', borderBottom: '0.75pt solid #202124', padding: '4.62pt', AwBorderBottom: '0.5pt single', AwBorderRight: '0.5pt single' }}>
                                <p style={{ textAlign: 'center', widows: 0, orphans: 0, fontSize: '10pt' }}><span style={{ fontWeight: 'bold', color: '#202124' }}>Column ()</span></p>
                            </td>
                            <td style={{ borderRight: '0.75pt solid #202124', borderLeft: '0.75pt solid #202124', borderBottom: '0.75pt solid #202124', padding: '4.62pt', AwBorderBottom: '0.5pt single', AwBorderLeft: '0.5pt single', AwBorderRight: '0.5pt single' }}>
                                <p style={{ textAlign: 'center', widows: 0, orphans: 0, fontSize: '10pt' }}><span style={{ fontWeight: 'bold', color: '#202124' }}>Description</span></p>
                            </td>
                            <td style={{ borderRight: '0.75pt solid #202124', borderLeft: '0.75pt solid #202124', borderBottom: '0.75pt solid #202124', padding: '4.62pt', AwBorderBottom: '0.5pt single', AwBorderLeft: '0.5pt single', AwBorderRight: '0.5pt single' }}>
                                <p style={{ textAlign: 'center', widows: 0, orphans: 0, fontSize: '10pt' }}><span style={{ fontWeight: 'bold', color: '#202124' }}>Original data type</span></p>
                            </td>
                            <td style={{ borderRight: '0.75pt solid #202124', borderLeft: '0.75pt solid #202124', borderBottom: '0.75pt solid #202124', padding: '4.62pt', AwBorderBottom: '0.5pt single', AwBorderLeft: '0.5pt single', AwBorderRight: '0.5pt single' }}>
                                <p style={{ textAlign: 'center', widows: 0, orphans: 0, fontSize: '10pt' }}><span style={{ fontWeight: 'bold', color: '#202124' }}>Adjusted data type</span></p>
                            </td>
                            <td style={{ borderLeft: '0.75pt solid #202124', borderBottom: '0.75pt solid #202124', padding: '1.78pt', AwBorderBottom: '0.5pt single', AwBorderLeft: '0.5pt single' }}>
                                <p style={{ textAlign: 'center', fontSize: '10pt' }}><span style={{ fontWeight: 'bold', color: '#202124' }}>Data
                                    example</span></p>
                            </td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td style={{ borderTop: '0.75pt solid #202124', borderRight: '0.75pt solid #202124', borderBottom: '0.75pt solid #202124', padding: '4.62pt', verticalAlign: 'top', AwBorderBottom: '0.5pt single', AwBorderRight: '0.5pt single', AwBorderTop: '0.5pt single' }}>
                                <p style={{ fontSize: '10pt' }}><span style={{ color: '#202124', backgroundColor: '#ffffff' }}>Fecha</span></p>
                            </td>
                            <td style={{ border: '0.75pt solid #202124', padding: '4.62pt', verticalAlign: 'top', AwBorder: '0.5pt single' }}>
                                <p style={{ fontSize: '10pt' }}><span style={{ color: '#202124', backgroundColor: '#ffffff' }}>Current
                                    date</span></p>
                            </td>
                            <td style={{ border: '0.75pt solid #202124', padding: '4.62pt', verticalAlign: 'top', AwBorder: '0.5pt single' }}>
                                <p style={{ fontSize: '10pt' }}><span style={{ color: '#202124', backgroundColor: '#ffffff' }}>{'{'}&lt;class
                                    'str'&gt;{'}'}</span></p>
                            </td>
                            <td style={{ border: '0.75pt solid #202124', padding: '4.62pt', verticalAlign: 'top', AwBorder: '0.5pt single' }}>
                                <p style={{ fontSize: '10pt' }}><span style={{ color: '#202124' }}>datetime64 [ns]</span></p>
                            </td>
                            <td style={{ borderTop: '0.75pt solid #202124', borderLeft: '0.75pt solid #202124', borderBottom: '0.75pt solid #202124', padding: '1.78pt', AwBorderBottom: '0.5pt single', AwBorderLeft: '0.5pt single', AwBorderTop: '0.5pt single' }}>
                                <p style={{ fontSize: '10pt' }}><span style={{ color: '#202124' }}>26/10/2021 0:00</span></p>
                            </td>
                        </tr>
                        <tr>
                            <td style={{ borderTop: '0.75pt solid #202124', borderRight: '0.75pt solid #202124', borderBottom: '0.75pt solid #202124', padding: '4.62pt', verticalAlign: 'top', AwBorderBottom: '0.5pt single', AwBorderRight: '0.5pt single', AwBorderTop: '0.5pt single' }}>
                                <p style={{ fontSize: '10pt' }}><span style={{ color: '#202124', backgroundColor: '#ffffff' }}>fecha_hora</span></p>
                            </td>
                            <td style={{ border: '0.75pt solid #202124', padding: '4.62pt', verticalAlign: 'top', AwBorder: '0.5pt single' }}>
                                <p style={{ fontSize: '10pt' }}><span style={{ color: '#202124', backgroundColor: '#ffffff' }}>Ride date</span>
                                </p>
                            </td>
                            <td style={{ border: '0.75pt solid #202124', padding: '4.62pt', verticalAlign: 'top', AwBorder: '0.5pt single' }}>
                                <p style={{ fontSize: '10pt' }}><span style={{ color: '#202124', backgroundColor: '#ffffff' }}>{'{'}&lt;class
                                    'str'&gt;{'}'}</span></p>
                            </td>
                            <td style={{ border: '0.75pt solid #202124', padding: '4.62pt', verticalAlign: 'top', AwBorder: '0.5pt single' }}>
                                <p style={{ fontSize: '10pt' }}><span style={{ color: '#202124' }}>datetime64 [ns]</span></p>
                            </td>
                            <td style={{ borderTop: '0.75pt solid #202124', borderLeft: '0.75pt solid #202124', borderBottom: '0.75pt solid #202124', padding: '1.78pt', AwBorderBottom: '0.5pt single', AwBorderLeft: '0.5pt single', AwBorderTop: '0.5pt single' }}>
                                <p style={{ fontSize: '10pt' }}><span style={{ color: '#202124' }}>26/10/2021 12:33</span></p>
                            </td>
                        </tr>
                        <tr>
                            <td style={{ borderTop: '0.75pt solid #202124', borderRight: '0.75pt solid #202124', borderBottom: '0.75pt solid #202124', padding: '4.62pt', verticalAlign: 'top', AwBorderBottom: '0.5pt single', AwBorderRight: '0.5pt single', AwBorderTop: '0.5pt single' }}>
                                <p style={{ fontSize: '10pt' }}><span style={{ color: '#202124', backgroundColor: '#ffffff' }}>numero_tarjeta</span></p>
                            </td>
                            <td style={{ border: '0.75pt solid #202124', padding: '4.62pt', verticalAlign: 'top', AwBorder: '0.5pt single' }}>
                                <p style={{ fontSize: '10pt' }}><span style={{ color: '#202124', backgroundColor: '#ffffff' }}>Card Id</span>
                                </p>
                            </td>
                            <td style={{ border: '0.75pt solid #202124', padding: '4.62pt', verticalAlign: 'top', AwBorder: '0.5pt single' }}>
                                <p style={{ fontSize: '10pt' }}><span style={{ color: '#202124', backgroundColor: '#ffffff' }}>{'{'}&lt;class
                                    'str'&gt;{'}'}</span></p>
                            </td>
                            <td style={{ border: '0.75pt solid #202124', padding: '4.62pt', verticalAlign: 'top', AwBorder: '0.5pt single' }}>
                                <p style={{ fontSize: '10pt' }}><span style={{ color: '#202124' }}>category</span></p>
                            </td>
                            <td style={{ borderTop: '0.75pt solid #202124', borderLeft: '0.75pt solid #202124', borderBottom: '0.75pt solid #202124', padding: '1.78pt', verticalAlign: 'top', AwBorderBottom: '0.5pt single', AwBorderLeft: '0.5pt single', AwBorderTop: '0.5pt single' }}>
                                <p style={{ fontSize: '10pt' }}><span style={{ color: '#202124' }}>7c553fd8922656c25c4d411a4f94309ed613fd193ad60b...</span></p>
                            </td>
                        </tr>
                        <tr>
                            <td style={{ borderTop: '0.75pt solid #202124', borderRight: '0.75pt solid #202124', borderBottom: '0.75pt solid #202124', padding: '4.62pt', verticalAlign: 'top', AwBorderBottom: '0.5pt single', AwBorderRight: '0.5pt single', AwBorderTop: '0.5pt single' }}>
                                <p style={{ fontSize: '10pt' }}><span style={{ color: '#202124', backgroundColor: '#ffffff' }}>valor</span></p>
                            </td>
                            <td style={{ border: '0.75pt solid #202124', padding: '4.62pt', verticalAlign: 'top', AwBorder: '0.5pt single' }}>
                                <p style={{ fontSize: '10pt' }}><span style={{ color: '#202124', backgroundColor: '#ffffff' }}>Fare
                                    value</span></p>
                            </td>
                            <td style={{ border: '0.75pt solid #202124', padding: '4.62pt', verticalAlign: 'top', AwBorder: '0.5pt single' }}>
                                <p style={{ fontSize: '10pt' }}><span style={{ color: '#202124', backgroundColor: '#ffffff' }}>{'{'}&lt;class
                                    'float'&gt;{'}'}</span></p>
                            </td>
                            <td style={{ border: '0.75pt solid #202124', padding: '4.62pt', verticalAlign: 'top', AwBorder: '0.5pt single' }}>
                                <p style={{ fontSize: '10pt' }}><span style={{ color: '#202124' }}>float64</span></p>
                            </td>
                            <td style={{ borderTop: '0.75pt solid #202124', borderLeft: '0.75pt solid #202124', borderBottom: '0.75pt solid #202124', padding: '1.78pt', verticalAlign: 'top', AwBorderBottom: '0.5pt single', AwBorderLeft: '0.5pt single', AwBorderTop: '0.5pt single' }}>
                                <p style={{ fontSize: '10pt' }}><span style={{ color: '#202124' }}>0.0</span></p>
                            </td>
                        </tr>
                        <tr>
                            <td style={{ borderTop: '0.75pt solid #202124', borderRight: '0.75pt solid #202124', borderBottom: '0.75pt solid #202124', padding: '4.62pt', verticalAlign: 'top', AwBorderBottom: '0.5pt single', AwBorderRight: '0.5pt single', AwBorderTop: '0.5pt single' }}>
                                <p style={{ fontSize: '10pt' }}><span style={{ color: '#202124', backgroundColor: '#ffffff' }}>id_linea</span><span style={{ width: '1.53pt', display: 'inline-block' }}>&nbsp;</span></p>
                            </td>
                            <td style={{ border: '0.75pt solid #202124', padding: '4.62pt', verticalAlign: 'top', AwBorder: '0.5pt single' }}>
                                <p style={{ fontSize: '10pt' }}><span style={{ color: '#202124', AwImport: 'ignore' }}>&nbsp;</span></p>
                            </td>
                            <td style={{ border: '0.75pt solid #202124', padding: '4.62pt', verticalAlign: 'top', AwBorder: '0.5pt single' }}>
                                <p style={{ fontSize: '10pt' }}><span style={{ color: '#202124', backgroundColor: '#ffffff' }}>{'{'}&lt;class
                                    'int'&gt;{'}'}</span></p>
                            </td>
                            <td style={{ border: '0.75pt solid #202124', padding: '4.62pt', verticalAlign: 'top', AwBorder: '0.5pt single' }}>
                                <p style={{ fontSize: '10pt' }}><span style={{ color: '#202124' }}>category</span></p>
                            </td>
                            <td style={{ borderTop: '0.75pt solid #202124', borderLeft: '0.75pt solid #202124', borderBottom: '0.75pt solid #202124', padding: '1.78pt', verticalAlign: 'top', AwBorderBottom: '0.5pt single', AwBorderLeft: '0.5pt single', AwBorderTop: '0.5pt single' }}>
                                <p style={{ fontSize: '10pt' }}><span style={{ color: '#202124' }}>1194</span></p>
                            </td>
                        </tr>
                        <tr>
                            <td style={{ borderTop: '0.75pt solid #202124', borderRight: '0.75pt solid #202124', borderBottom: '0.75pt solid #202124', padding: '4.62pt', verticalAlign: 'top', AwBorderBottom: '0.5pt single', AwBorderRight: '0.5pt single', AwBorderTop: '0.5pt single' }}>
                                <p style={{ fontSize: '10pt' }}><span style={{ color: '#202124', backgroundColor: '#ffffff' }}>id_ruta</span><span style={{ width: '5.42pt', display: 'inline-block' }}>&nbsp;</span></p>
                            </td>
                            <td style={{ border: '0.75pt solid #202124', padding: '4.62pt', verticalAlign: 'top', AwBorder: '0.5pt single' }}>
                                <p style={{ fontSize: '10pt' }}><span style={{ color: '#202124', backgroundColor: '#ffffff' }}>Route Id</span>
                                </p>
                            </td>
                            <td style={{ border: '0.75pt solid #202124', padding: '4.62pt', verticalAlign: 'top', AwBorder: '0.5pt single' }}>
                                <p style={{ fontSize: '10pt' }}><span style={{ color: '#202124', backgroundColor: '#ffffff' }}>{'{'}&lt;class
                                    'int'&gt;{'}'}</span></p>
                            </td>
                            <td style={{ border: '0.75pt solid #202124', padding: '4.62pt', verticalAlign: 'top', AwBorder: '0.5pt single' }}>
                                <p style={{ fontSize: '10pt' }}><span style={{ color: '#202124' }}>category</span></p>
                            </td>
                            <td style={{ borderTop: '0.75pt solid #202124', borderLeft: '0.75pt solid #202124', borderBottom: '0.75pt solid #202124', padding: '1.78pt', verticalAlign: 'top', AwBorderBottom: '0.5pt single', AwBorderLeft: '0.5pt single', AwBorderTop: '0.5pt single' }}>
                                <p style={{ fontSize: '10pt' }}><span style={{ color: '#202124' }}>6287</span></p>
                            </td>
                        </tr>
                        <tr>
                            <td style={{ borderTop: '0.75pt solid #202124', borderRight: '0.75pt solid #202124', borderBottom: '0.75pt solid #202124', padding: '4.62pt', verticalAlign: 'top', AwBorderBottom: '0.5pt single', AwBorderRight: '0.5pt single', AwBorderTop: '0.5pt single' }}>
                                <p style={{ fontSize: '10pt' }}><span style={{ color: '#202124', backgroundColor: '#ffffff' }}>tipo_servicio</span></p>
                            </td>
                            <td style={{ border: '0.75pt solid #202124', padding: '4.62pt', verticalAlign: 'top', AwBorder: '0.5pt single' }}>
                                <p style={{ fontSize: '10pt' }}><span style={{ color: '#202124', backgroundColor: '#ffffff' }}>Service
                                    mode</span></p>
                            </td>
                            <td style={{ border: '0.75pt solid #202124', padding: '4.62pt', verticalAlign: 'top', AwBorder: '0.5pt single' }}>
                                <p style={{ fontSize: '10pt' }}><span style={{ color: '#202124', backgroundColor: '#ffffff' }}>{'{'}&lt;class
                                    'str'&gt;{'}'}</span></p>
                            </td>
                            <td style={{ border: '0.75pt solid #202124', padding: '4.62pt', verticalAlign: 'top', AwBorder: '0.5pt single' }}>
                                <p style={{ fontSize: '10pt' }}><span style={{ color: '#202124' }}>category</span></p>
                            </td>
                            <td style={{ borderTop: '0.75pt solid #202124', borderLeft: '0.75pt solid #202124', borderBottom: '0.75pt solid #202124', padding: '1.78pt', verticalAlign: 'top', AwBorderBottom: '0.5pt single', AwBorderLeft: '0.5pt single', AwBorderTop: '0.5pt single' }}>
                                <p style={{ fontSize: '10pt' }}><span style={{ color: '#202124' }}>ZONAL</span></p>
                            </td>
                        </tr>
                        <tr>
                            <td style={{ borderTop: '0.75pt solid #202124', borderRight: '0.75pt solid #202124', borderBottom: '0.75pt solid #202124', padding: '4.62pt', verticalAlign: 'top', AwBorderBottom: '0.5pt single', AwBorderRight: '0.5pt single', AwBorderTop: '0.5pt single' }}>
                                <p style={{ fontSize: '10pt' }}><span style={{ color: '#202124', backgroundColor: '#ffffff' }}>id_vehiculo</span></p>
                            </td>
                            <td style={{ border: '0.75pt solid #202124', padding: '4.62pt', verticalAlign: 'top', AwBorder: '0.5pt single' }}>
                                <p style={{ fontSize: '10pt' }}><span style={{ color: '#202124', backgroundColor: '#ffffff' }}>Vehicle
                                    Id</span></p>
                            </td>
                            <td style={{ border: '0.75pt solid #202124', padding: '4.62pt', verticalAlign: 'top', AwBorder: '0.5pt single' }}>
                                <p style={{ fontSize: '10pt' }}><span style={{ color: '#202124', backgroundColor: '#ffffff' }}>{'{'}&lt;class
                                    'float'&gt;{'}'}</span></p>
                            </td>
                            <td style={{ border: '0.75pt solid #202124', padding: '4.62pt', verticalAlign: 'top', AwBorder: '0.5pt single' }}>
                                <p style={{ fontSize: '10pt' }}><span style={{ color: '#202124' }}>category</span></p>
                            </td>
                            <td style={{ borderTop: '0.75pt solid #202124', borderLeft: '0.75pt solid #202124', borderBottom: '0.75pt solid #202124', padding: '1.78pt', verticalAlign: 'top', AwBorderBottom: '0.5pt single', AwBorderLeft: '0.5pt single', AwBorderTop: '0.5pt single' }}>
                                <p style={{ fontSize: '10pt' }}><span style={{ color: '#202124' }}>937130.0</span></p>
                            </td>
                        </tr>
                        <tr>
                            <td style={{ borderTop: '0.75pt solid #202124', borderRight: '0.75pt solid #202124', borderBottom: '0.75pt solid #202124', padding: '4.62pt', verticalAlign: 'top', AwBorderBottom: '0.5pt single', AwBorderRight: '0.5pt single', AwBorderTop: '0.5pt single' }}>
                                <p style={{ fontSize: '10pt' }}><span style={{ color: '#202124', backgroundColor: '#ffffff' }}>id_dispositivo</span></p>
                            </td>
                            <td style={{ border: '0.75pt solid #202124', padding: '4.62pt', verticalAlign: 'top', AwBorder: '0.5pt single' }}>
                                <p style={{ fontSize: '10pt' }}><span style={{ color: '#202124', backgroundColor: '#ffffff' }}>Device Id</span>
                                </p>
                            </td>
                            <td style={{ border: '0.75pt solid #202124', padding: '4.62pt', verticalAlign: 'top', AwBorder: '0.5pt single' }}>
                                <p style={{ fontSize: '10pt' }}><span style={{ color: '#202124', backgroundColor: '#ffffff' }}>{'{'}&lt;class
                                    'int'&gt;{'}'}</span></p>
                            </td>
                            <td style={{ border: '0.75pt solid #202124', padding: '4.62pt', verticalAlign: 'top', AwBorder: '0.5pt single' }}>
                                <p style={{ fontSize: '10pt' }}><span style={{ color: '#202124' }}>int64</span></p>
                            </td>
                            <td style={{ borderTop: '0.75pt solid #202124', borderLeft: '0.75pt solid #202124', borderBottom: '0.75pt solid #202124', padding: '1.78pt', verticalAlign: 'top', AwBorderBottom: '0.5pt single', AwBorderLeft: '0.5pt single', AwBorderTop: '0.5pt single' }}>
                                <p style={{ fontSize: '10pt' }}><span>220002615</span></p>
                            </td>
                        </tr>
                        <tr>
                            <td style={{ borderTop: '0.75pt solid #202124', borderRight: '0.75pt solid #202124', borderBottom: '0.75pt solid #202124', padding: '4.62pt', verticalAlign: 'top', AwBorderBottom: '0.5pt single', AwBorderRight: '0.5pt single', AwBorderTop: '0.5pt single' }}>
                                <p style={{ fontSize: '10pt' }}><span style={{ color: '#202124', backgroundColor: '#ffffff' }}>parada_origen</span></p>
                            </td>
                            <td style={{ border: '0.75pt solid #202124', padding: '4.62pt', verticalAlign: 'top', AwBorder: '0.5pt single' }}>
                                <p style={{ fontSize: '10pt' }}><span style={{ color: '#202124', backgroundColor: '#ffffff' }}>Origin
                                    stop</span></p>
                            </td>
                            <td style={{ border: '0.75pt solid #202124', padding: '4.62pt', verticalAlign: 'top', AwBorder: '0.5pt single' }}>
                                <p style={{ fontSize: '10pt' }}><span style={{ color: '#202124', backgroundColor: '#ffffff' }}>{'{'}&lt;class
                                    'str'&gt;{'}'}</span></p>
                            </td>
                            <td style={{ border: '0.75pt solid #202124', padding: '4.62pt', verticalAlign: 'top', AwBorder: '0.5pt single' }}>
                                <p style={{ fontSize: '10pt' }}><span style={{ color: '#202124' }}>category</span></p>
                            </td>
                            <td style={{ borderTop: '0.75pt solid #202124', borderLeft: '0.75pt solid #202124', borderBottom: '0.75pt solid #202124', padding: '1.78pt', verticalAlign: 'top', AwBorderBottom: '0.5pt single', AwBorderLeft: '0.5pt single', AwBorderTop: '0.5pt single' }}>
                                <p style={{ fontSize: '10pt' }}><span>177A00</span></p>
                            </td>
                        </tr>
                        <tr>
                            <td style={{ borderTop: '0.75pt solid #202124', borderRight: '0.75pt solid #202124', borderBottom: '0.75pt solid #202124', padding: '4.62pt', verticalAlign: 'top', AwBorderBottom: '0.5pt single', AwBorderRight: '0.5pt single', AwBorderTop: '0.5pt single' }}>
                                <p style={{ fontSize: '10pt' }}><span style={{ color: '#202124', backgroundColor: '#ffffff' }}>parada_siguiente</span></p>
                            </td>
                            <td style={{ border: '0.75pt solid #202124', padding: '4.62pt', verticalAlign: 'top', AwBorder: '0.5pt single' }}>
                                <p style={{ fontSize: '10pt' }}><span style={{ color: '#202124', backgroundColor: '#ffffff' }}>Next stop (to
                                    the origin stop)</span></p>
                            </td>
                            <td style={{ border: '0.75pt solid #202124', padding: '4.62pt', verticalAlign: 'top', AwBorder: '0.5pt single' }}>
                                <p style={{ fontSize: '10pt' }}><span style={{ color: '#202124', backgroundColor: '#ffffff' }}>{'{'}&lt;class
                                    'str'&gt;, &lt;class 'float'&gt;{'}'}</span></p>
                            </td>
                            <td style={{ border: '0.75pt solid #202124', padding: '4.62pt', verticalAlign: 'top', AwBorder: '0.5pt single' }}>
                                <p style={{ fontSize: '10pt' }}><span style={{ color: '#202124' }}>category</span></p>
                            </td>
                            <td style={{ borderTop: '0.75pt solid #202124', borderLeft: '0.75pt solid #202124', borderBottom: '0.75pt solid #202124', padding: '1.78pt', verticalAlign: 'top', AwBorderBottom: '0.5pt single', AwBorderLeft: '0.5pt single', AwBorderTop: '0.5pt single' }}>
                                <p style={{ fontSize: '10pt' }}><span>215B00</span></p>
                            </td>
                        </tr>
                        <tr>
                            <td style={{ borderTop: '0.75pt solid #202124', borderRight: '0.75pt solid #202124', borderBottom: '0.75pt solid #202124', padding: '4.62pt', verticalAlign: 'top', AwBorderBottom: '0.5pt single', AwBorderRight: '0.5pt single', AwBorderTop: '0.5pt single' }}>
                                <p style={{ fontSize: '10pt' }}><span style={{ color: '#202124', backgroundColor: '#ffffff' }}>id</span></p>
                            </td>
                            <td style={{ border: '0.75pt solid #202124', padding: '4.62pt', verticalAlign: 'top', AwBorder: '0.5pt single' }}>
                                <p style={{ fontSize: '10pt' }}><span style={{ color: '#202124', backgroundColor: '#ffffff' }}>Registry
                                    Id</span></p>
                            </td>
                            <td style={{ border: '0.75pt solid #202124', padding: '4.62pt', verticalAlign: 'top', AwBorder: '0.5pt single' }}>
                                <p style={{ fontSize: '10pt' }}><span style={{ color: '#202124', backgroundColor: '#ffffff' }}>{'{'}&lt;class
                                    'str'&gt;{'}'}</span></p>
                            </td>
                            <td style={{ border: '0.75pt solid #202124', padding: '4.62pt', verticalAlign: 'top', AwBorder: '0.5pt single' }}>
                                <p style={{ fontSize: '10pt' }}><span style={{ color: '#202124' }}>object</span></p>
                            </td>
                            <td style={{ borderTop: '0.75pt solid #202124', borderLeft: '0.75pt solid #202124', borderBottom: '0.75pt solid #202124', padding: '1.78pt', verticalAlign: 'top', AwBorderBottom: '0.5pt single', AwBorderLeft: '0.5pt single', AwBorderTop: '0.5pt single' }}>
                                <p style={{ fontSize: '10pt' }}><span>63</span></p>
                            </td>
                        </tr>
                        <tr>
                            <td style={{ borderTop: '0.75pt solid #202124', borderRight: '0.75pt solid #202124', borderBottom: '0.75pt solid #202124', padding: '4.62pt', verticalAlign: 'top', AwBorderBottom: '0.5pt single', AwBorderRight: '0.5pt single', AwBorderTop: '0.5pt single' }}>
                                <p style={{ fontSize: '10pt' }}><span style={{ color: '#202124', backgroundColor: '#ffffff' }}>parada_destino</span></p>
                            </td>
                            <td style={{ border: '0.75pt solid #202124', padding: '4.62pt', verticalAlign: 'top', AwBorder: '0.5pt single' }}>
                                <p style={{ fontSize: '10pt' }}><span style={{ color: '#202124', backgroundColor: '#ffffff' }}>Final
                                    station</span></p>
                            </td>
                            <td style={{ border: '0.75pt solid #202124', padding: '4.62pt', verticalAlign: 'top', AwBorder: '0.5pt single' }}>
                                <p style={{ fontSize: '10pt' }}><span style={{ color: '#202124', backgroundColor: '#ffffff' }}>{'{'}&lt;class
                                    'str'&gt;{'}'}</span></p>
                            </td>
                            <td style={{ border: '0.75pt solid #202124', padding: '4.62pt', verticalAlign: 'top', AwBorder: '0.5pt single' }}>
                                <p style={{ fontSize: '10pt' }}><span style={{ color: '#202124' }}>category</span></p>
                            </td>
                            <td style={{ borderTop: '0.75pt solid #202124', borderLeft: '0.75pt solid #202124', borderBottom: '0.75pt solid #202124', padding: '1.78pt', verticalAlign: 'top', AwBorderBottom: '0.5pt single', AwBorderLeft: '0.5pt single', AwBorderTop: '0.5pt single' }}>
                                <p style={{ fontSize: '10pt' }}><span>799A00</span></p>
                            </td>
                        </tr>
                        <tr>
                            <td style={{ borderTop: '0.75pt solid #202124', borderRight: '0.75pt solid #202124', borderBottom: '0.75pt solid #202124', padding: '4.62pt', verticalAlign: 'top', AwBorderBottom: '0.5pt single', AwBorderRight: '0.5pt single', AwBorderTop: '0.5pt single' }}>
                                <p style={{ fontSize: '10pt' }}><span style={{ color: '#202124', backgroundColor: '#ffffff' }}>posx_parada_origen</span></p>
                            </td>
                            <td style={{ border: '0.75pt solid #202124', padding: '4.62pt', verticalAlign: 'top', AwBorder: '0.5pt single' }}>
                                <p style={{ lineHeight: '115%', fontSize: '10pt' }}><span style={{ color: '#202124', backgroundColor: '#ffffff' }}>Trip origin latitude</span></p>
                            </td>
                            <td style={{ border: '0.75pt solid #202124', padding: '4.62pt', verticalAlign: 'top', AwBorder: '0.5pt single' }}>
                                <p style={{ fontSize: '10pt' }}><span style={{ color: '#202124', backgroundColor: '#ffffff' }}>{'{'}&lt;class
                                    'float'&gt;{'}'}</span></p>
                            </td>
                            <td style={{ border: '0.75pt solid #202124', padding: '4.62pt', verticalAlign: 'top', AwBorder: '0.5pt single' }}>
                                <p style={{ fontSize: '10pt' }}><span style={{ color: '#202124' }}>float64</span></p>
                            </td>
                            <td style={{ borderTop: '0.75pt solid #202124', borderLeft: '0.75pt solid #202124', borderBottom: '0.75pt solid #202124', padding: '1.78pt', verticalAlign: 'top', AwBorderBottom: '0.5pt single', AwBorderLeft: '0.5pt single', AwBorderTop: '0.5pt single' }}>
                                <p style={{ fontSize: '10pt' }}><span>NaN</span></p>
                            </td>
                        </tr>
                        <tr>
                            <td style={{ borderTop: '0.75pt solid #202124', borderRight: '0.75pt solid #202124', borderBottom: '0.75pt solid #202124', padding: '4.62pt', verticalAlign: 'top', AwBorderBottom: '0.5pt single', AwBorderRight: '0.5pt single', AwBorderTop: '0.5pt single' }}>
                                <p style={{ fontSize: '10pt' }}><span style={{ color: '#202124', backgroundColor: '#ffffff' }}>posy_parada_origen</span></p>
                            </td>
                            <td style={{ border: '0.75pt solid #202124', padding: '4.62pt', verticalAlign: 'top', AwBorder: '0.5pt single' }}>
                                <p style={{ lineHeight: '115%', fontSize: '10pt' }}><span style={{ color: '#202124', backgroundColor: '#ffffff' }}>Trip origin longitude</span></p>
                            </td>
                            <td style={{ border: '0.75pt solid #202124', padding: '4.62pt', verticalAlign: 'top', AwBorder: '0.5pt single' }}>
                                <p style={{ fontSize: '10pt' }}><span style={{ color: '#202124', backgroundColor: '#ffffff' }}>{'{'}&lt;class
                                    'float'&gt;{'}'}</span></p>
                            </td>
                            <td style={{ border: '0.75pt solid #202124', padding: '4.62pt', verticalAlign: 'top', AwBorder: '0.5pt single' }}>
                                <p style={{ fontSize: '10pt' }}><span style={{ color: '#202124' }}>float64</span></p>
                            </td>
                            <td style={{ borderTop: '0.75pt solid #202124', borderLeft: '0.75pt solid #202124', borderBottom: '0.75pt solid #202124', padding: '1.78pt', verticalAlign: 'top', AwBorderBottom: '0.5pt single', AwBorderLeft: '0.5pt single', AwBorderTop: '0.5pt single' }}>
                                <p style={{ fontSize: '10pt' }}><span>NaN</span></p>
                            </td>
                        </tr>
                        <tr>
                            <td style={{ borderTop: '0.75pt solid #202124', borderRight: '0.75pt solid #202124', borderBottom: '0.75pt solid #202124', padding: '4.62pt', verticalAlign: 'top', AwBorderBottom: '0.5pt single', AwBorderRight: '0.5pt single', AwBorderTop: '0.5pt single' }}>
                                <p style={{ fontSize: '10pt' }}><span style={{ color: '#202124', backgroundColor: '#ffffff' }}>posx_parada_destino</span></p>
                            </td>
                            <td style={{ border: '0.75pt solid #202124', padding: '4.62pt', verticalAlign: 'top', AwBorder: '0.5pt single' }}>
                                <p style={{ lineHeight: '115%', fontSize: '10pt' }}><span style={{ color: '#202124', backgroundColor: '#ffffff' }}>Trip destination latitude</span></p>
                            </td>
                            <td style={{ border: '0.75pt solid #202124', padding: '4.62pt', verticalAlign: 'top', AwBorder: '0.5pt single' }}>
                                <p style={{ fontSize: '10pt' }}><span style={{ color: '#202124', backgroundColor: '#ffffff' }}>{'{'}&lt;class
                                    'float'&gt;{'}'}</span></p>
                            </td>
                            <td style={{ border: '0.75pt solid #202124', padding: '4.62pt', verticalAlign: 'top', AwBorder: '0.5pt single' }}>
                                <p style={{ fontSize: '10pt' }}><span style={{ color: '#202124' }}>float64</span></p>
                            </td>
                            <td style={{ borderTop: '0.75pt solid #202124', borderLeft: '0.75pt solid #202124', borderBottom: '0.75pt solid #202124', padding: '4.62pt 3.62pt', verticalAlign: 'top', AwBorderBottom: '0.5pt single', AwBorderLeft: '0.5pt single', AwBorderTop: '0.5pt single' }}>
                                <p style={{ fontSize: '10pt' }}><span>NaN</span></p>
                            </td>
                        </tr>
                        <tr>
                            <td style={{ borderTop: '0.75pt solid #202124', borderRight: '0.75pt solid #202124', padding: '4.62pt', verticalAlign: 'top', AwBorderRight: '0.5pt single', AwBorderTop: '0.5pt single' }}>
                                <p style={{ fontSize: '10pt' }}><span style={{ color: '#202124', backgroundColor: '#ffffff' }}>posy_parada_destino</span></p>
                            </td>
                            <td style={{ borderTop: '0.75pt solid #202124', borderRight: '0.75pt solid #202124', borderLeft: '0.75pt solid #202124', padding: '4.62pt', verticalAlign: 'top', AwBorderLeft: '0.5pt single', AwBorderRight: '0.5pt single', AwBorderTop: '0.5pt single' }}>
                                <p style={{ lineHeight: '115%', fontSize: '10pt' }}><span style={{ color: '#202124', backgroundColor: '#ffffff' }}>Trip destination longitude</span></p>
                            </td>
                            <td style={{ borderTop: '0.75pt solid #202124', borderRight: '0.75pt solid #202124', borderLeft: '0.75pt solid #202124', padding: '4.62pt', verticalAlign: 'top', AwBorderLeft: '0.5pt single', AwBorderRight: '0.5pt single', AwBorderTop: '0.5pt single' }}>
                                <p style={{ fontSize: '10pt' }}><span style={{ color: '#202124', backgroundColor: '#ffffff' }}>{'{'}&lt;class
                                    'float'&gt;{'}'}</span></p>
                            </td>
                            <td style={{ borderTop: '0.75pt solid #202124', borderRight: '0.75pt solid #202124', borderLeft: '0.75pt solid #202124', padding: '4.62pt', verticalAlign: 'top', AwBorderLeft: '0.5pt single', AwBorderRight: '0.5pt single', AwBorderTop: '0.5pt single' }}>
                                <p style={{ fontSize: '10pt', backgroundColor: '#ffffff' }}><span style={{ color: '#202124' }}>float64</span>
                                </p>
                            </td>
                            <td style={{ borderTop: '0.75pt solid #202124', borderLeft: '0.75pt solid #202124', padding: '4.62pt 3.62pt', verticalAlign: 'top', AwBorderLeft: '0.5pt single', AwBorderTop: '0.5pt single' }}>
                                <p style={{ fontSize: '10pt' }}><span>NaN</span></p>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <p><span style={{ AwImport: 'ignore' }}>&nbsp;</span></p>
                <p style={{ marginLeft: '36pt', textAlign: 'justify', lineHeight: '115%', fontSize: '10.5pt' }}><span style={{ fontWeight: 'bold', fontStyle: 'italic', backgroundColor: '#ffffff' }}>Unit consistency: </span><span style={{ backgroundColor: '#ffffff' }}>On the origin-destination matrix there are two columns with units. The
                    first one is "value", which is correctly registered in Colombian pesos and represents the value of the
                    ticket. The second one,</span><span style={{ backgroundColor: '#ffffff', AwImport: 'spaces' }}>&nbsp;
                    </span><span style={{ backgroundColor: '#ffffff' }}>"date_time", is the trip date in 24 hour format. The rest of
                        the columns are self-explanatory and their data types match their units.</span></p>
                <p style={{ marginLeft: '36pt', lineHeight: '115%', fontSize: '10.5pt' }}><span style={{ AwImport: 'ignore' }}>&nbsp;</span>
                </p>
                <p style={{ marginLeft: '36pt', textAlign: 'justify', lineHeight: '115%', fontSize: '10.5pt' }}><span style={{ fontWeight: 'bold', fontStyle: 'italic', backgroundColor: '#ffffff' }}>Categorical
                    consistency:</span><span style={{ fontWeight: 'bold', backgroundColor: '#ffffff' }}> </span><span style={{ backgroundColor: '#ffffff' }}>The variables that describe a specific characteristic were
                        standardized. Among these data were service type, card number, line id, route, and vehicle; as well as
                        trip start, next stop on the route, and destination.</span></p>
                <p style={{ textAlign: 'justify', lineHeight: '115%', fontSize: '10.5pt' }}><span style={{ AwImport: 'ignore' }}>&nbsp;</span>
                </p>
                <p style={{ marginLeft: '36pt', textAlign: 'justify', lineHeight: '115%', fontSize: '10.5pt' }}><span style={{ fontWeight: 'bold', fontStyle: 'italic', backgroundColor: '#ffffff' }}>String formatting: </span><span style={{ backgroundColor: '#ffffff' }}>The database describes two service types: Bus Rapid Transit (BRT,
                    described here as Trunk) and conventional Bus (Zonal bus).</span><span style={{ backgroundColor: '#ffffff', AwImport: 'spaces' }}>&nbsp; </span><span style={{ backgroundColor: '#ffffff' }}>For the latter, stop names are composed by a combination of numbers and
                        letters to which nothing was modified. However, the Trunk stops were placed in lowercase since they are
                        their own names, such as: “COMUNEROS” to “comuneros”.</span></p>
                <p style={{ marginLeft: '36pt', textAlign: 'justify', lineHeight: '115%', fontSize: '10.5pt' }}><span style={{ fontWeight: 'bold', fontStyle: 'italic', AwImport: 'ignore' }}>&nbsp;</span></p>
                <p style={{ marginLeft: '36pt', textAlign: 'justify', lineHeight: '115%', fontSize: '10.5pt' }}><span style={{ fontWeight: 'bold', fontStyle: 'italic', backgroundColor: '#ffffff' }}>Referential integrity:</span><span style={{ fontWeight: 'bold', fontStyle: 'italic', color: '#ff0000', backgroundColor: '#ffffff' }}> </span><span style={{ color: '#202124', backgroundColor: '#ffffff' }}>Referential integrity: There is a column named “id” that
                    uniquely identifies the data registered. At the time of writing it is not considered necessary for the
                    model.</span></p>
                <p style={{ marginLeft: '36pt', textAlign: 'justify', lineHeight: '115%', fontSize: '10.5pt' }}><span style={{ fontWeight: 'bold', fontStyle: 'italic', AwImport: 'ignore' }}>&nbsp;</span></p>
                <ol start={3} type={1} style={{ margin: '0pt', paddingLeft: '0pt' }}>
                    <li style={{ marginLeft: '32.17pt', paddingLeft: '3.83pt', fontWeight: 'bold' }}><span>RELEVANCE</span></li>
                </ol>
                <p style={{ marginLeft: '36pt' }}><span style={{ AwImport: 'ignore' }}>&nbsp;</span></p>
                <p style={{ marginLeft: '36pt', textAlign: 'justify' }}><span style={{ lineHeight: '115%', fontSize: '10.5pt', fontWeight: 'bold', fontStyle: 'italic', backgroundColor: '#ffffff' }}>Properly
                    dealing with missing values:</span><span style={{ fontStyle: 'italic' }}> </span><span>The matrix contains
                        null values in six cells. However, in agreement with the project’s objective, the researchers will focus
                        on finding how to fill the last four (next chart), which refer to the stops’</span><span style={{ AwImport: 'spaces' }}>&nbsp; </span><span>coordinates.</span><br /><span style={{ AwImport: 'ignore' }}>&nbsp;</span></p>
                <div style={{ textAlign: 'center' }}>
                    <table cellSpacing={0} cellPadding={0} className="Table2" style={{ width: '187.8pt', marginRight: 'auto', marginLeft: 'auto', border: '1pt solid #000000', AwBorderInsideh: '1pt single #000000', AwBorderInsidev: '1pt single #000000', borderCollapse: 'collapse' }}>
                        <thead>
                            <tr>
                                <td style={{ borderRightStyle: 'solid', borderRightWidth: '1pt', borderBottomStyle: 'solid', borderBottomWidth: '1pt', padding: '4.5pt', verticalAlign: 'top' }}>
                                    <p style={{ textAlign: 'center', widows: 0, orphans: 0, fontSize: '10pt' }}><span style={{ fontWeight: 'bold' }}>Column</span></p>
                                </td>
                                <td style={{ borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderBottomStyle: 'solid', borderBottomWidth: '1pt', padding: '4.5pt', verticalAlign: 'top' }}>
                                    <p style={{ textAlign: 'center', widows: 0, orphans: 0, fontSize: '10pt' }}><span style={{ fontWeight: 'bold' }}>Missing values</span></p>
                                </td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td style={{ borderTopStyle: 'solid', borderTopWidth: '1pt', borderRightStyle: 'solid', borderRightWidth: '1pt', borderBottomStyle: 'solid', borderBottomWidth: '1pt', padding: '4.5pt', verticalAlign: 'top' }}>
                                    <p style={{ fontSize: '10pt' }}><span style={{ color: '#202124', backgroundColor: '#ffffff' }}>Fecha</span>
                                    </p>
                                </td>
                                <td style={{ borderTopStyle: 'solid', borderTopWidth: '1pt', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderBottomStyle: 'solid', borderBottomWidth: '1pt', padding: '4.5pt', verticalAlign: 'top' }}>
                                    <p style={{ textAlign: 'right', fontSize: '10pt' }}><span style={{ color: '#202124', backgroundColor: '#ffffff' }}>0</span></p>
                                </td>
                            </tr>
                            <tr>
                                <td style={{ borderTopStyle: 'solid', borderTopWidth: '1pt', borderRightStyle: 'solid', borderRightWidth: '1pt', borderBottomStyle: 'solid', borderBottomWidth: '1pt', padding: '4.5pt', verticalAlign: 'top' }}>
                                    <p style={{ fontSize: '10pt' }}><span style={{ color: '#202124', backgroundColor: '#ffffff' }}>fecha_hora</span></p>
                                </td>
                                <td style={{ borderTopStyle: 'solid', borderTopWidth: '1pt', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderBottomStyle: 'solid', borderBottomWidth: '1pt', padding: '4.5pt', verticalAlign: 'top' }}>
                                    <p style={{ textAlign: 'right', fontSize: '10pt' }}><span style={{ color: '#202124', backgroundColor: '#ffffff' }}>0</span></p>
                                </td>
                            </tr>
                            <tr>
                                <td style={{ borderTopStyle: 'solid', borderTopWidth: '1pt', borderRightStyle: 'solid', borderRightWidth: '1pt', borderBottomStyle: 'solid', borderBottomWidth: '1pt', padding: '4.5pt', verticalAlign: 'top' }}>
                                    <p style={{ fontSize: '10pt' }}><span style={{ color: '#202124', backgroundColor: '#ffffff' }}>numero_tarjeta</span></p>
                                </td>
                                <td style={{ borderTopStyle: 'solid', borderTopWidth: '1pt', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderBottomStyle: 'solid', borderBottomWidth: '1pt', padding: '4.5pt', verticalAlign: 'top' }}>
                                    <p style={{ textAlign: 'right', fontSize: '10pt' }}><span style={{ color: '#202124', backgroundColor: '#ffffff' }}>0</span></p>
                                </td>
                            </tr>
                            <tr>
                                <td style={{ borderTopStyle: 'solid', borderTopWidth: '1pt', borderRightStyle: 'solid', borderRightWidth: '1pt', borderBottomStyle: 'solid', borderBottomWidth: '1pt', padding: '4.5pt', verticalAlign: 'top' }}>
                                    <p style={{ fontSize: '10pt' }}><span style={{ color: '#202124', backgroundColor: '#ffffff' }}>valor</span>
                                    </p>
                                </td>
                                <td style={{ borderTopStyle: 'solid', borderTopWidth: '1pt', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderBottomStyle: 'solid', borderBottomWidth: '1pt', padding: '4.5pt', verticalAlign: 'top' }}>
                                    <p style={{ textAlign: 'right', fontSize: '10pt' }}><span style={{ color: '#202124', backgroundColor: '#ffffff' }}>0</span></p>
                                </td>
                            </tr>
                            <tr>
                                <td style={{ borderTopStyle: 'solid', borderTopWidth: '1pt', borderRightStyle: 'solid', borderRightWidth: '1pt', borderBottomStyle: 'solid', borderBottomWidth: '1pt', padding: '4.5pt', verticalAlign: 'top' }}>
                                    <p style={{ fontSize: '10pt' }}><span style={{ color: '#202124', backgroundColor: '#ffffff' }}>id_linea</span><span style={{ width: '1.53pt', display: 'inline-block' }}>&nbsp;</span></p>
                                </td>
                                <td style={{ borderTopStyle: 'solid', borderTopWidth: '1pt', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderBottomStyle: 'solid', borderBottomWidth: '1pt', padding: '4.5pt', verticalAlign: 'top' }}>
                                    <p style={{ textAlign: 'right', fontSize: '10pt' }}><span style={{ color: '#202124', backgroundColor: '#ffffff' }}>0</span></p>
                                </td>
                            </tr>
                            <tr>
                                <td style={{ borderTopStyle: 'solid', borderTopWidth: '1pt', borderRightStyle: 'solid', borderRightWidth: '1pt', borderBottomStyle: 'solid', borderBottomWidth: '1pt', padding: '4.5pt', verticalAlign: 'top' }}>
                                    <p style={{ fontSize: '10pt' }}><span style={{ color: '#202124', backgroundColor: '#ffffff' }}>id_ruta</span><span style={{ width: '5.42pt', display: 'inline-block' }}>&nbsp;</span></p>
                                </td>
                                <td style={{ borderTopStyle: 'solid', borderTopWidth: '1pt', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderBottomStyle: 'solid', borderBottomWidth: '1pt', padding: '4.5pt', verticalAlign: 'top' }}>
                                    <p style={{ textAlign: 'right', fontSize: '10pt' }}><span style={{ color: '#202124', backgroundColor: '#ffffff' }}>0</span></p>
                                </td>
                            </tr>
                            <tr>
                                <td style={{ borderTopStyle: 'solid', borderTopWidth: '1pt', borderRightStyle: 'solid', borderRightWidth: '1pt', borderBottomStyle: 'solid', borderBottomWidth: '1pt', padding: '4.5pt', verticalAlign: 'top' }}>
                                    <p style={{ fontSize: '10pt' }}><span style={{ color: '#202124', backgroundColor: '#ffffff' }}>tipo_servicio</span></p>
                                </td>
                                <td style={{ borderTopStyle: 'solid', borderTopWidth: '1pt', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderBottomStyle: 'solid', borderBottomWidth: '1pt', padding: '4.5pt', verticalAlign: 'top' }}>
                                    <p style={{ textAlign: 'right', fontSize: '10pt' }}><span style={{ color: '#202124', backgroundColor: '#ffffff' }}>0</span></p>
                                </td>
                            </tr>
                            <tr>
                                <td style={{ borderTopStyle: 'solid', borderTopWidth: '1pt', borderRightStyle: 'solid', borderRightWidth: '1pt', borderBottomStyle: 'solid', borderBottomWidth: '1pt', padding: '4.5pt', verticalAlign: 'top' }}>
                                    <p style={{ fontSize: '10pt' }}><span style={{ color: '#202124', backgroundColor: '#ffffff' }}>id_vehiculo</span></p>
                                </td>
                                <td style={{ borderTopStyle: 'solid', borderTopWidth: '1pt', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderBottomStyle: 'solid', borderBottomWidth: '1pt', padding: '4.5pt', verticalAlign: 'top' }}>
                                    <p style={{ textAlign: 'right', fontSize: '10pt' }}><span style={{ color: '#202124', backgroundColor: '#ffffff' }}>1510723</span></p>
                                </td>
                            </tr>
                            <tr>
                                <td style={{ borderTopStyle: 'solid', borderTopWidth: '1pt', borderRightStyle: 'solid', borderRightWidth: '1pt', borderBottomStyle: 'solid', borderBottomWidth: '1pt', padding: '4.5pt', verticalAlign: 'top' }}>
                                    <p style={{ fontSize: '10pt' }}><span style={{ color: '#202124', backgroundColor: '#ffffff' }}>id_dispositivo</span></p>
                                </td>
                                <td style={{ borderTopStyle: 'solid', borderTopWidth: '1pt', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderBottomStyle: 'solid', borderBottomWidth: '1pt', padding: '4.5pt', verticalAlign: 'top' }}>
                                    <p style={{ textAlign: 'right', fontSize: '10pt' }}><span style={{ color: '#202124', backgroundColor: '#ffffff' }}>0</span></p>
                                </td>
                            </tr>
                            <tr>
                                <td style={{ borderTopStyle: 'solid', borderTopWidth: '1pt', borderRightStyle: 'solid', borderRightWidth: '1pt', borderBottomStyle: 'solid', borderBottomWidth: '1pt', padding: '4.5pt', verticalAlign: 'top' }}>
                                    <p style={{ fontSize: '10pt' }}><span style={{ color: '#202124', backgroundColor: '#ffffff' }}>parada_origen</span></p>
                                </td>
                                <td style={{ borderTopStyle: 'solid', borderTopWidth: '1pt', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderBottomStyle: 'solid', borderBottomWidth: '1pt', padding: '4.5pt', verticalAlign: 'top' }}>
                                    <p style={{ textAlign: 'right', fontSize: '10pt' }}><span style={{ color: '#202124', backgroundColor: '#ffffff' }}>0</span></p>
                                </td>
                            </tr>
                            <tr>
                                <td style={{ borderTopStyle: 'solid', borderTopWidth: '1pt', borderRightStyle: 'solid', borderRightWidth: '1pt', borderBottomStyle: 'solid', borderBottomWidth: '1pt', padding: '4.5pt', verticalAlign: 'top' }}>
                                    <p style={{ fontSize: '10pt' }}><span style={{ color: '#202124', backgroundColor: '#ffffff' }}>parada_siguiente</span></p>
                                </td>
                                <td style={{ borderTopStyle: 'solid', borderTopWidth: '1pt', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderBottomStyle: 'solid', borderBottomWidth: '1pt', padding: '4.5pt', verticalAlign: 'top' }}>
                                    <p style={{ textAlign: 'right', fontSize: '10pt' }}><span style={{ color: '#202124', backgroundColor: '#ffffff' }}>940354</span></p>
                                </td>
                            </tr>
                            <tr>
                                <td style={{ borderTopStyle: 'solid', borderTopWidth: '1pt', borderRightStyle: 'solid', borderRightWidth: '1pt', borderBottomStyle: 'solid', borderBottomWidth: '1pt', padding: '4.5pt', verticalAlign: 'top' }}>
                                    <p style={{ fontSize: '10pt' }}><span style={{ color: '#202124', backgroundColor: '#ffffff' }}>id</span>
                                    </p>
                                </td>
                                <td style={{ borderTopStyle: 'solid', borderTopWidth: '1pt', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderBottomStyle: 'solid', borderBottomWidth: '1pt', padding: '4.5pt', verticalAlign: 'top' }}>
                                    <p style={{ textAlign: 'right', fontSize: '10pt' }}><span style={{ color: '#202124', backgroundColor: '#ffffff' }}>0</span></p>
                                </td>
                            </tr>
                            <tr>
                                <td style={{ borderTopStyle: 'solid', borderTopWidth: '1pt', borderRightStyle: 'solid', borderRightWidth: '1pt', borderBottomStyle: 'solid', borderBottomWidth: '1pt', padding: '4.5pt', verticalAlign: 'top' }}>
                                    <p style={{ fontSize: '10pt' }}><span style={{ color: '#202124', backgroundColor: '#ffffff' }}>parada_destino</span></p>
                                </td>
                                <td style={{ borderTopStyle: 'solid', borderTopWidth: '1pt', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderBottomStyle: 'solid', borderBottomWidth: '1pt', padding: '4.5pt', verticalAlign: 'top' }}>
                                    <p style={{ textAlign: 'right', fontSize: '10pt' }}><span style={{ color: '#202124', backgroundColor: '#ffffff' }}>0</span></p>
                                </td>
                            </tr>
                            <tr>
                                <td style={{ borderTopStyle: 'solid', borderTopWidth: '1pt', borderRightStyle: 'solid', borderRightWidth: '1pt', borderBottomStyle: 'solid', borderBottomWidth: '1pt', padding: '4.5pt', verticalAlign: 'top' }}>
                                    <p style={{ fontSize: '10pt' }}><span style={{ color: '#202124', backgroundColor: '#ffffff' }}>posx_parada_origen</span></p>
                                </td>
                                <td style={{ borderTopStyle: 'solid', borderTopWidth: '1pt', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderBottomStyle: 'solid', borderBottomWidth: '1pt', padding: '4.5pt', verticalAlign: 'top' }}>
                                    <p style={{ textAlign: 'right', fontSize: '10pt' }}><span style={{ color: '#202124', backgroundColor: '#ffffff' }}>2962727</span></p>
                                </td>
                            </tr>
                            <tr>
                                <td style={{ borderTopStyle: 'solid', borderTopWidth: '1pt', borderRightStyle: 'solid', borderRightWidth: '1pt', borderBottomStyle: 'solid', borderBottomWidth: '1pt', padding: '4.5pt', verticalAlign: 'top' }}>
                                    <p style={{ fontSize: '10pt' }}><span style={{ color: '#202124', backgroundColor: '#ffffff' }}>posy_parada_origen</span></p>
                                </td>
                                <td style={{ borderTopStyle: 'solid', borderTopWidth: '1pt', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderBottomStyle: 'solid', borderBottomWidth: '1pt', padding: '4.5pt', verticalAlign: 'top' }}>
                                    <p style={{ textAlign: 'right', fontSize: '10pt' }}><span style={{ color: '#202124', backgroundColor: '#ffffff' }}>2962727</span></p>
                                </td>
                            </tr>
                            <tr>
                                <td style={{ borderTopStyle: 'solid', borderTopWidth: '1pt', borderRightStyle: 'solid', borderRightWidth: '1pt', borderBottomStyle: 'solid', borderBottomWidth: '1pt', padding: '4.5pt', verticalAlign: 'top' }}>
                                    <p style={{ fontSize: '10pt' }}><span style={{ color: '#202124', backgroundColor: '#ffffff' }}>posx_parada_destino</span></p>
                                </td>
                                <td style={{ borderTopStyle: 'solid', borderTopWidth: '1pt', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderBottomStyle: 'solid', borderBottomWidth: '1pt', padding: '4.5pt', verticalAlign: 'top' }}>
                                    <p style={{ textAlign: 'right', fontSize: '10pt' }}><span style={{ color: '#202124', backgroundColor: '#ffffff' }}>2962727</span></p>
                                </td>
                            </tr>
                            <tr>
                                <td style={{ borderTopStyle: 'solid', borderTopWidth: '1pt', borderRightStyle: 'solid', borderRightWidth: '1pt', padding: '4.5pt', verticalAlign: 'top' }}>
                                    <p style={{ fontSize: '10pt' }}><span style={{ color: '#202124', backgroundColor: '#ffffff' }}>posy_parada_destino</span></p>
                                </td>
                                <td style={{ borderTopStyle: 'solid', borderTopWidth: '1pt', borderLeftStyle: 'solid', borderLeftWidth: '1pt', padding: '4.5pt', verticalAlign: 'top' }}>
                                    <p style={{ textAlign: 'right', fontSize: '10pt' }}><span style={{ color: '#202124', backgroundColor: '#ffffff' }}>2962727</span></p>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <p><span style={{ AwImport: 'ignore' }}>&nbsp;</span></p>
                <p style={{ marginLeft: '36pt', textAlign: 'justify', lineHeight: '115%', fontSize: '10.5pt' }}><span style={{ fontWeight: 'bold', fontStyle: 'italic', backgroundColor: '#ffffff' }}>Removing unnecessary features or
                    observations: </span><span style={{ backgroundColor: '#ffffff' }}>The columns that are not considered
                        necessary to meet the project’s objective were removed: "id", "valor" and "parada_siguiente".</span></p>
                <p style={{ lineHeight: '115%', fontSize: '10.5pt' }}><span style={{ fontWeight: 'bold', fontStyle: 'italic', color: '#ff0000', AwImport: 'ignore' }}>&nbsp;</span></p>
                <p style={{ marginLeft: '36pt', lineHeight: '115%', fontSize: '10.5pt' }}><span style={{ fontWeight: 'bold', AwImport: 'ignore' }}>&nbsp;</span></p>
                <ol start={4} type={1} style={{ margin: '0pt', paddingLeft: '0pt' }}>
                    <li style={{ marginLeft: '32.17pt', paddingLeft: '3.83pt', fontWeight: 'bold' }}><span>DATA AUGMENTATION:</span></li>
                </ol>
                <p style={{ marginLeft: '36pt' }}><span style={{ fontWeight: 'bold', AwImport: 'ignore' }}>&nbsp;</span></p>
                <p style={{ marginLeft: '36pt', textAlign: 'justify' }}><span style={{ color: '#202124', backgroundColor: '#ffffff' }}>As
                    mentioned in the last section, the last four columns of the origin-destination matrix do not contain any
                    data regarding the origin and destination coordinates. Through the "Stops" database, it is possible to
                    find the longitude and the latitude for each stop for both Trunk and Zonal systems. </span></p>
                <p style={{ textAlign: 'justify' }}><span style={{ color: '#202124', AwImport: 'ignore' }}>&nbsp;</span></p>
                <p style={{ marginLeft: '36pt', textAlign: 'center' }}><img className='img-fluid' src="/images/dataAugmentation1.jpg" width={572} height={147} alt="" style={{ AwLeftPos: '0pt', AwRelHpos: 'column', AwRelVpos: 'paragraph', AwTopPos: '0pt', AwWrapType: 'inline' }} />
                </p>
                <p style={{ marginLeft: '36pt', textAlign: 'justify' }}><span style={{ color: '#202124', AwImport: 'ignore' }}>&nbsp;</span></p>
                <p style={{ marginLeft: '36pt', textAlign: 'justify' }}><span style={{ color: '#202124', backgroundColor: '#ffffff' }}>The main
                    statistics are shown below:</span></p>
                <p style={{ marginLeft: '36pt', textAlign: 'center' }}><img className='img-fluid' src="/images/dataAugmentation2.png" width={602} height={171} alt="" style={{ AwLeftPos: '26.25pt', AwRelHpos: 'column', AwRelVpos: 'paragraph', AwTopPos: '15pt', AwWrapType: 'topbottom' }} /><br />
                </p>
                <p style={{ marginLeft: '36pt', textAlign: 'justify' }}><span>Prior to the merge with the origin destination matrix
                    (File </span><span style={{ fontStyle: 'italic' }}>matriz_origen_destino_20211026.csv</span><span>), stops
                        with the same code were found and remedied. As each stop has two points, one on each side of the street,
                        the longitude and latitude differ by 3 to 10 meters. In this regard, it was decided to ignore that
                        difference and a single point per station was selected.</span></p>
                <p><span style={{ AwImport: 'ignore' }}>&nbsp;</span></p>
                <p style={{ marginLeft: '36pt', textAlign: 'center' }}><img className='img-fluid' src="images/dataAugmentation3.png" width={588} height={179} alt="" style={{ AwLeftPos: '0pt', AwRelHpos: 'column', AwRelVpos: 'paragraph', AwTopPos: '0pt', AwWrapType: 'inline' }} />
                </p>
                <p style={{ marginLeft: '36pt' }}><span style={{ color: '#ff0000', AwImport: 'ignore' }}>&nbsp;</span></p>
                <p style={{ marginLeft: '36pt', textAlign: 'justify' }}><span style={{ color: '#202124' }}>The merge of these two databases was
                    performed through the column "stop_code", from the “</span><span style={{ fontStyle: 'italic', color: '#202124' }}>Stops.txt</span><span style={{ color: '#202124' }}>” database file,
                        and origin and destination columns, from the file </span><span style={{ fontStyle: 'italic' }}>matriz_origen_destino_20211026.csv</span><span style={{ color: '#202124' }}>. After
                            the database combination, it was found that it only works for Zonal stops, since the names of the Trunk
                            stops are out of date in the origin destination matrix and therefore do not match between the two
                            charts. To solve this problem, a mapping chart with the updated names was built and used to obtain the
                            missing coordinates.</span></p>
                <p style={{ marginLeft: '36pt', textAlign: 'justify' }}><span style={{ color: '#202124', AwImport: 'ignore' }}>&nbsp;</span></p>
                <p style={{ marginLeft: '36pt', textAlign: 'justify' }}><span style={{ color: '#202124' }}>At the time of this presentation,
                    there are 9 Trunk stations of which coordinates cannot be matched with any station. Those unnamed
                    stations total 202456 records. This is due to the fact that the name assigned in the origin destination
                    matrix does not correspond to any of the stations in the stops database. Some examples of these station
                    names are: </span><span style={{ fontStyle: 'italic', color: '#202124' }}>Cabecera Usme, Cabecera Calle 80,
                        Estación Calle 63, Colegio Sagrado Corazón de Jesús Bethlemitas y Hospitales</span><span style={{ color: '#202124' }}>. This issue and the data type of the coordinates will be addressed at the next
                            meeting with Secretaría de Movilidad.</span></p>
                <p style={{ marginLeft: '36pt', textAlign: 'justify' }}><span style={{ color: '#202124', AwImport: 'ignore' }}>&nbsp;</span></p>
                <p style={{ marginLeft: '36pt', textAlign: 'justify' }}><span style={{ color: '#202124' }}>Leaving aside the previous seasons
                    (for the moment), the database still has 2759740 rows, the distributions of the main variables are shown
                    below. </span></p>
                <p style={{ textAlign: 'justify' }}><span style={{ color: '#202124', AwImport: 'ignore' }}>&nbsp;</span></p>
                <ol start={5} type={1} style={{ margin: '0pt', paddingLeft: '0pt' }}>
                    <li style={{ marginLeft: '32.17pt', paddingLeft: '3.83pt', fontWeight: 'bold' }}><span>Variable distributions:</span>
                    </li>
                </ol>
                <h1 style={{ marginTop: '0pt', marginLeft: '36pt', marginBottom: '0pt', pageBreakInside: 'auto', pageBreakAfter: 'auto', lineHeight: '115%', fontSize: '11pt' }}>
                    <a name="_heading_h.immlf0mvgyhe" /><span style={{ fontWeight: 'bold', fontStyle: 'italic', textDecoration: 'underline', color: '#0e101a' }}>Service
                        Type:</span></h1>
                <h1 style={{ marginTop: '0pt', marginLeft: '36pt', marginBottom: '0pt', pageBreakInside: 'auto', pageBreakAfter: 'auto', lineHeight: '115%', fontSize: '11pt' }}>
                    <a name="_heading_h.mpjet3xbhxrm" /><span style={{ color: '#0e101a' }}>Transmilenio's service types are Troncal
                        and Zonal, the former accounting for 52.6% of trips and the latter for 47.4%.</span></h1>
                <p style={{ textAlign: 'center' }}><img className='img-fluid' src="/images/variableDistributions1.png" width={503} height={432} alt="" style={{ AwLeftPos: '0pt', AwRelHpos: 'column', AwRelVpos: 'paragraph', AwTopPos: '0pt', AwWrapType: 'inline' }} />
                </p>
                <p style={{ marginLeft: '36pt', textAlign: 'justify' }}><span style={{ fontWeight: 'bold', fontStyle: 'italic', textDecoration: 'underline' }}>Trips by hour: </span><span style={{ fontWeight: 'bold', fontStyle: 'italic', backgroundColor: '#ffff00', AwImport: 'spaces' }}>&nbsp;</span>
                </p>
                <p style={{ marginLeft: '36pt', textAlign: 'justify' }}><span>When a bar chart of the hourly trips was made, a strange
                    trip time distribution was found. The peak hours are incorrect by the cultural customs knowledge. The
                    graph extracted from the database is shown below:</span></p>
                <p style={{ marginLeft: '36pt', textAlign: 'center' }}><span style={{ AwImport: 'spaces' }}>&nbsp;</span><img className='img-fluid' src="/images/variableDistributions2.png" width={568} height={254} alt="" style={{ AwLeftPos: '0pt', AwRelHpos: 'column', AwRelVpos: 'paragraph', AwTopPos: '0pt', AwWrapType: 'inline' }} />
                </p>
                <p style={{ marginLeft: '36pt', textAlign: 'justify' }}><span>It is worth mentioning that there is a possibility that
                    the hours are given in GMT 00. However, this must be confirmed with the Secretariat of Mobility of
                    Bogota at the next meeting. </span></p>
                <p style={{ textAlign: 'justify' }}><span style={{ AwImport: 'ignore' }}>&nbsp;</span></p>
                <p style={{ marginLeft: '36pt', textAlign: 'justify' }}><span>The following two graphs show the distribution of trips
                    per hour in the city of Bogota. The first represents the flow from the origin and the second from the
                    destination.</span><span style={{ AwImport: 'spaces' }}>&nbsp; </span></p>
                <p style={{ marginLeft: '36pt', textAlign: 'center' }}><img className='img-fluid' src="/images/variableDistributions3.png" width={578} height={578} alt="" style={{ AwLeftPos: '0pt', AwRelHpos: 'column', AwRelVpos: 'paragraph', AwTopPos: '0pt', AwWrapType: 'inline' }} />
                </p>
                <p style={{ marginLeft: '36pt' }}><span style={{ AwImport: 'ignore' }}>&nbsp;</span></p>
                <p style={{ marginLeft: '36pt', textAlign: 'center' }}><img className='img-fluid' src="/images/variableDistributions4.png" width={624} height={619} alt="" style={{ AwLeftPos: '0pt', AwRelHpos: 'column', AwRelVpos: 'paragraph', AwTopPos: '0pt', AwWrapType: 'inline' }} />
                </p>
                <p style={{ marginLeft: '36pt', textAlign: 'justify' }}><span style={{ AwImport: 'ignore' }}>&nbsp;</span></p>
                <p style={{ marginLeft: '36pt', textAlign: 'justify' }}><span style={{ fontWeight: 'bold', fontStyle: 'italic', textDecoration: 'underline' }}>Trips by route:</span></p>
                <p style={{ marginLeft: '36pt', textAlign: 'justify' }}><span>In addition, the distribution of trips by route was shown
                    in a histogram, which shows that there is one route with more than 14,000 trips; this information will
                    be discussed further below. </span></p>
                <p style={{ marginLeft: '36pt', textAlign: 'center' }}><img className='img-fluid' src="/images/variableDistributions5.png" width={574} height={310} alt="" style={{ AwLeftPos: '0pt', AwRelHpos: 'column', AwRelVpos: 'paragraph', AwTopPos: '0pt', AwWrapType: 'inline' }} />
                </p>
                <p style={{ marginLeft: '36pt' }}><span style={{ fontWeight: 'bold', fontStyle: 'italic', textDecoration: 'underline' }}>Origin:</span></p>
                <p style={{ marginLeft: '36pt', textAlign: 'center' }}><img className='img-fluid' src="/images/variableDistributions6.png" width={454} height={389} alt="" style={{ AwLeftPos: '0pt', AwRelHpos: 'column', AwRelVpos: 'paragraph', AwTopPos: '0pt', AwWrapType: 'inline' }} />
                </p>
                <p style={{ marginLeft: '36pt' }}><span style={{ fontStyle: 'italic', AwImport: 'ignore' }}>&nbsp;</span></p>
                <p style={{ marginLeft: '36pt' }}><br style={{ pageBreakBefore: 'always', clear: 'both' }} /></p>
                <p style={{ marginLeft: '36pt' }}><span style={{ fontWeight: 'bold', fontStyle: 'italic', textDecoration: 'underline' }}>Destination: </span></p>
                <p style={{ marginLeft: '36pt', textAlign: 'center' }}><img className='img-fluid' src="/images/variableDistributions7.png" width={434} height={373} alt="" style={{ AwLeftPos: '0pt', AwRelHpos: 'column', AwRelVpos: 'paragraph', AwTopPos: '0pt', AwWrapType: 'inline' }} />
                </p>
                <p style={{ marginLeft: '36pt' }}><span style={{ AwImport: 'ignore' }}>&nbsp;</span></p>
                <p style={{ marginLeft: '36pt', textAlign: 'justify' }}><span style={{ fontWeight: 'bold', fontStyle: 'italic', textDecoration: 'underline' }}>Trips by user:</span></p>
                <p style={{ marginLeft: '36pt', textAlign: 'justify' }}><span>Finally, the following histogram and box plot show that
                    the median is at 2, this number represents the number of trips per person (identified by the card
                    number). </span></p>
                <p style={{ marginLeft: '36pt', textAlign: 'center' }}><img className='img-fluid' src="/images/variableDistributions8.png" width={577} height={311} alt="" style={{ AwLeftPos: '0pt', AwRelHpos: 'column', AwRelVpos: 'paragraph', AwTopPos: '0pt', AwWrapType: 'inline' }} />
                </p>
                <p style={{ marginLeft: '36pt', textAlign: 'justify' }}><span>It is observed that the outliers reach more than 80, so it
                    is considered to eliminate those points greater than 10, if this is the case, the distribution would be
                    as follows.</span><span style={{ AwImport: 'spaces' }}>&nbsp; </span></p>
                <p style={{ marginLeft: '36pt', textAlign: 'center' }}><img className='img-fluid' src="/images/variableDistributions9.png" width={568} height={306} alt="" style={{ AwLeftPos: '0pt', AwRelHpos: 'column', AwRelVpos: 'paragraph', AwTopPos: '0pt', AwWrapType: 'inline' }} />
                </p>
                <p><span style={{ fontWeight: 'bold' }}>Corrupted data in STOP_TIMES (GTFS-1026/stop_times.txt)</span></p>
                <p><span style={{ fontWeight: 'bold', AwImport: 'ignore' }}>&nbsp;</span></p>
                <p><span>This database is one of the most important because it contains the times that will be the main supply
                    to achieve the project objective. It is made up of 6 columns, as shown below: </span></p>
                <p><span style={{ fontWeight: 'bold', AwImport: 'ignore' }}>&nbsp;</span></p>
                <table cellSpacing={0} cellPadding={0} className="Table3" style={{ width: '478pt', marginLeft: '0.75pt', border: '1pt solid #000000', borderCollapse: 'collapse', marginRight: 'auto', marginLeft: 'auto', }}>
                    <tbody><tr style={{ height: '14.15pt' }}>
                        <td style={{ borderRightStyle: 'solid', borderRightWidth: '1pt', borderBottomStyle: 'solid', borderBottomWidth: '1pt', padding: '5.5pt', verticalAlign: 'top', backgroundColor: '#ffffff' }}>
                            <p style={{ marginTop: '12pt', textAlign: 'right', lineHeight: '115%', fontSize: '9pt' }}><span style={{ fontWeight: 'bold', AwImport: 'spaces' }}>&nbsp;</span></p>
                        </td>
                        <td style={{ borderRightStyle: 'solid', borderRightWidth: '1pt', borderBottomStyle: 'solid', borderBottomWidth: '1pt', padding: '5.5pt 5.5pt 5.5pt 6pt', verticalAlign: 'top', backgroundColor: '#ffffff' }}>
                            <p style={{ marginTop: '12pt', textAlign: 'right', lineHeight: '115%', fontSize: '9pt' }}><span style={{ fontWeight: 'bold' }}>trip_id</span></p>
                        </td>
                        <td style={{ borderRightStyle: 'solid', borderRightWidth: '1pt', borderBottomStyle: 'solid', borderBottomWidth: '1pt', padding: '5.5pt 5.5pt 5.5pt 6pt', verticalAlign: 'top', backgroundColor: '#ffffff' }}>
                            <p style={{ marginTop: '12pt', textAlign: 'right', lineHeight: '115%', fontSize: '9pt' }}><span style={{ fontWeight: 'bold' }}>arrival_time</span></p>
                        </td>
                        <td style={{ borderRightStyle: 'solid', borderRightWidth: '1pt', borderBottomStyle: 'solid', borderBottomWidth: '1pt', padding: '5.5pt 5.5pt 5.5pt 6pt', verticalAlign: 'top', backgroundColor: '#ffffff' }}>
                            <p style={{ marginTop: '12pt', textAlign: 'right', lineHeight: '115%', fontSize: '9pt' }}><span style={{ fontWeight: 'bold' }}>departure_time</span></p>
                        </td>
                        <td style={{ borderRightStyle: 'solid', borderRightWidth: '1pt', borderBottomStyle: 'solid', borderBottomWidth: '1pt', padding: '5.5pt 5.5pt 5.5pt 6pt', verticalAlign: 'top', backgroundColor: '#ffffff' }}>
                            <p style={{ marginTop: '12pt', textAlign: 'right', lineHeight: '115%', fontSize: '9pt' }}><span style={{ fontWeight: 'bold' }}>stop_id</span></p>
                        </td>
                        <td style={{ borderRightStyle: 'solid', borderRightWidth: '1pt', borderBottomStyle: 'solid', borderBottomWidth: '1pt', padding: '5.5pt 5.5pt 5.5pt 6pt', verticalAlign: 'top', backgroundColor: '#ffffff' }}>
                            <p style={{ marginTop: '12pt', textAlign: 'right', lineHeight: '115%', fontSize: '9pt' }}><span style={{ fontWeight: 'bold' }}>stop_sequence</span></p>
                        </td>
                        <td style={{ borderBottomStyle: 'solid', borderBottomWidth: '1pt', padding: '0.5pt 0.5pt 0.5pt 1pt', verticalAlign: 'top', backgroundColor: '#ffffff' }}>
                            <p style={{ marginTop: '12pt', textAlign: 'right', lineHeight: '115%', fontSize: '9pt' }}><span style={{ fontWeight: 'bold' }}>stop_headsign</span></p>
                        </td>
                    </tr>
                        <tr style={{ height: '32.05pt' }}>
                            <td style={{ borderRightStyle: 'solid', borderRightWidth: '1pt', borderBottomStyle: 'solid', borderBottomWidth: '1pt', padding: '6pt 5.5pt 5.5pt', verticalAlign: 'top', backgroundColor: '#f5f5f5' }}>
                                <p style={{ marginTop: '12pt', textAlign: 'right', lineHeight: '115%', fontSize: '9pt' }}><span style={{ fontWeight: 'bold' }}>Ex</span></p>
                            </td>
                            <td style={{ borderRightStyle: 'solid', borderRightWidth: '1pt', borderBottomStyle: 'solid', borderBottomWidth: '1pt', padding: '6pt 5.5pt 5.5pt 6pt', verticalAlign: 'top', backgroundColor: '#f5f5f5' }}>
                                <p style={{ marginTop: '12pt', textAlign: 'right', lineHeight: '115%', fontSize: '9pt' }}>
                                    <span>CNJLD0002-05-2</span></p>
                            </td>
                            <td style={{ borderRightStyle: 'solid', borderRightWidth: '1pt', borderBottomStyle: 'solid', borderBottomWidth: '1pt', padding: '6pt 5.5pt 5.5pt 6pt', verticalAlign: 'top', backgroundColor: '#f5f5f5' }}>
                                <p style={{ marginTop: '12pt', textAlign: 'right', lineHeight: '115%', fontSize: '9pt' }}><span>13:32:18</span>
                                </p>
                            </td>
                            <td style={{ borderRightStyle: 'solid', borderRightWidth: '1pt', borderBottomStyle: 'solid', borderBottomWidth: '1pt', padding: '6pt 5.5pt 5.5pt 6pt', verticalAlign: 'top', backgroundColor: '#f5f5f5' }}>
                                <p style={{ marginTop: '12pt', textAlign: 'right', lineHeight: '115%', fontSize: '9pt' }}><span>13:32:18</span>
                                </p>
                            </td>
                            <td style={{ borderRightStyle: 'solid', borderRightWidth: '1pt', borderBottomStyle: 'solid', borderBottomWidth: '1pt', padding: '6pt 5.5pt 5.5pt 6pt', verticalAlign: 'top', backgroundColor: '#f5f5f5' }}>
                                <p style={{ marginTop: '12pt', textAlign: 'right', lineHeight: '115%', fontSize: '9pt' }}><span>93306</span></p>
                            </td>
                            <td style={{ borderRightStyle: 'solid', borderRightWidth: '1pt', borderBottomStyle: 'solid', borderBottomWidth: '1pt', padding: '6pt 5.5pt 5.5pt 6pt', verticalAlign: 'top', backgroundColor: '#f5f5f5' }}>
                                <p style={{ marginTop: '12pt', textAlign: 'right', lineHeight: '115%', fontSize: '9pt' }}><span>31</span></p>
                            </td>
                            <td style={{ borderBottomStyle: 'solid', borderBottomWidth: '1pt', padding: '6pt 5.5pt 5.5pt 6pt', verticalAlign: 'top', backgroundColor: '#f5f5f5' }}>
                                <p style={{ marginTop: '12pt', textAlign: 'right', lineHeight: '115%', fontSize: '9pt' }}><span>K904 Salitre
                                    Greco</span></p>
                            </td>
                        </tr>
                        <tr style={{ height: '33.75pt' }}>
                            <td style={{ borderRightStyle: 'solid', borderRightWidth: '1pt', borderBottomStyle: 'solid', borderBottomWidth: '1pt', padding: '6pt 5.5pt 5.5pt', verticalAlign: 'top', backgroundColor: '#f5f5f5' }}>
                                <p style={{ marginTop: '12pt', textAlign: 'right', lineHeight: '115%', fontSize: '9pt' }}><span style={{ fontWeight: 'bold' }}>type</span></p>
                            </td>
                            <td style={{ borderRightStyle: 'solid', borderRightWidth: '1pt', borderBottomStyle: 'solid', borderBottomWidth: '1pt', padding: '6pt 5.5pt 5.5pt 6pt', verticalAlign: 'top', backgroundColor: '#f5f5f5' }}>
                                <p style={{ marginTop: '12pt', textAlign: 'right', lineHeight: '115%', fontSize: '9pt' }}><span>object</span>
                                </p>
                            </td>
                            <td style={{ borderRightStyle: 'solid', borderRightWidth: '1pt', borderBottomStyle: 'solid', borderBottomWidth: '1pt', padding: '6pt 5.5pt 5.5pt 6pt', verticalAlign: 'top', backgroundColor: '#f5f5f5' }}>
                                <p style={{ marginTop: '12pt', textAlign: 'right', lineHeight: '115%', fontSize: '9pt' }}><span>object</span>
                                </p>
                            </td>
                            <td style={{ borderRightStyle: 'solid', borderRightWidth: '1pt', borderBottomStyle: 'solid', borderBottomWidth: '1pt', padding: '6pt 5.5pt 5.5pt 6pt', verticalAlign: 'top', backgroundColor: '#f5f5f5' }}>
                                <p style={{ marginTop: '12pt', textAlign: 'right', lineHeight: '115%', fontSize: '9pt' }}><span>object</span>
                                </p>
                            </td>
                            <td style={{ borderRightStyle: 'solid', borderRightWidth: '1pt', borderBottomStyle: 'solid', borderBottomWidth: '1pt', padding: '6pt 5.5pt 5.5pt 6pt', verticalAlign: 'top', backgroundColor: '#f5f5f5' }}>
                                <p style={{ marginTop: '12pt', textAlign: 'right', lineHeight: '115%', fontSize: '9pt' }}><span>int64</span></p>
                            </td>
                            <td style={{ borderRightStyle: 'solid', borderRightWidth: '1pt', borderBottomStyle: 'solid', borderBottomWidth: '1pt', padding: '6pt 5.5pt 5.5pt 6pt', verticalAlign: 'top', backgroundColor: '#f5f5f5' }}>
                                <p style={{ marginTop: '12pt', textAlign: 'right', lineHeight: '115%', fontSize: '9pt' }}><span>int64</span></p>
                            </td>
                            <td style={{ borderBottomStyle: 'solid', borderBottomWidth: '1pt', padding: '6pt 5.5pt 5.5pt 6pt', verticalAlign: 'top', backgroundColor: '#f5f5f5' }}>
                                <p style={{ marginTop: '12pt', textAlign: 'right', lineHeight: '115%', fontSize: '9pt' }}><span>object</span>
                                </p>
                            </td>
                        </tr>
                        <tr style={{ height: '33.75pt' }}>
                            <td style={{ borderRightStyle: 'solid', borderRightWidth: '1pt', padding: '6pt 5.5pt 5.5pt', verticalAlign: 'top', backgroundColor: '#f5f5f5' }}>
                                <p style={{ marginTop: '12pt', textAlign: 'right', lineHeight: '115%', fontSize: '9pt' }}><span style={{ fontWeight: 'bold' }}>new type</span></p>
                            </td>
                            <td style={{ borderRightStyle: 'solid', borderRightWidth: '1pt', padding: '6pt 5.5pt 5.5pt 6pt', verticalAlign: 'top', backgroundColor: '#f5f5f5' }}>
                                <p style={{ marginTop: '12pt', textAlign: 'right', lineHeight: '115%', fontSize: '9pt' }}><span>category</span>
                                </p>
                            </td>
                            <td style={{ borderRightStyle: 'solid', borderRightWidth: '1pt', padding: '6pt 5.5pt 5.5pt 6pt', verticalAlign: 'top', backgroundColor: '#f5f5f5' }}>
                                <p style={{ marginTop: '12pt', textAlign: 'center', lineHeight: '115%', fontSize: '9pt' }}><span>**</span></p>
                            </td>
                            <td style={{ borderRightStyle: 'solid', borderRightWidth: '1pt', padding: '6pt 5.5pt 5.5pt 6pt', verticalAlign: 'top', backgroundColor: '#f5f5f5' }}>
                                <p style={{ marginTop: '12pt', textAlign: 'center', lineHeight: '115%', fontSize: '9pt' }}><span>**</span></p>
                            </td>
                            <td style={{ borderRightStyle: 'solid', borderRightWidth: '1pt', padding: '6pt 5.5pt 5.5pt 6pt', verticalAlign: 'top', backgroundColor: '#f5f5f5' }}>
                                <p style={{ marginTop: '12pt', textAlign: 'right', lineHeight: '115%', fontSize: '9pt' }}><span>category</span>
                                </p>
                            </td>
                            <td style={{ borderRightStyle: 'solid', borderRightWidth: '1pt', padding: '6pt 5.5pt 5.5pt 6pt', verticalAlign: 'top', backgroundColor: '#f5f5f5' }}>
                                <p style={{ marginTop: '12pt', textAlign: 'right', lineHeight: '115%', fontSize: '9pt' }}><span>int64</span></p>
                            </td>
                            <td style={{ padding: '6pt 5.5pt 5.5pt 6pt', verticalAlign: 'top', backgroundColor: '#f5f5f5' }}>
                                <p style={{ marginTop: '12pt', textAlign: 'right', lineHeight: '115%', fontSize: '9pt' }}><span>category</span>
                                </p>
                            </td>
                        </tr>
                    </tbody></table>
                <p><span style={{ fontWeight: 'bold', AwImport: 'ignore' }}>&nbsp;</span></p>
                <p style={{ textAlign: 'justify' }}><span>** When trying to change the variables "arrival_time" and "departure_time"
                    to the "datetime" type, it is observed that there are hours above the number 23. This aspect is shown in
                    the following table:</span></p>
                <p><span style={{ AwImport: 'ignore' }}>&nbsp;</span></p>
                <table cellSpacing={0} cellPadding={0} className="Table4" style={{ width: '188.5pt', marginLeft: 'auto', marginRight: 'auto', border: '1pt solid #000000', borderCollapse: 'collapse' }}>
                    <tbody><tr style={{ height: '23.25pt' }}>
                        <td style={{ borderRightStyle: 'solid', borderRightWidth: '1pt', borderBottomStyle: 'solid', borderBottomWidth: '1pt', padding: '5.5pt', verticalAlign: 'top', backgroundColor: '#ffffff' }}>
                            <p style={{ marginTop: '12pt', textAlign: 'center', lineHeight: '115%', fontSize: '9pt' }}><span style={{ fontWeight: 'bold', AwImport: 'spaces' }}>&nbsp;</span></p>
                        </td>
                        <td style={{ borderRightStyle: 'solid', borderRightWidth: '1pt', borderBottomStyle: 'solid', borderBottomWidth: '1pt', padding: '5.5pt 5.5pt 5.5pt 6pt', verticalAlign: 'top', backgroundColor: '#ffffff' }}>
                            <p style={{ marginTop: '12pt', textAlign: 'center', lineHeight: '115%', fontSize: '9pt' }}><span style={{ fontWeight: 'bold' }}>arrival_time</span></p>
                        </td>
                        <td style={{ borderBottomStyle: 'solid', borderBottomWidth: '1pt', padding: '5.5pt 5.5pt 5.5pt 6pt', verticalAlign: 'top', backgroundColor: '#ffffff' }}>
                            <p style={{ marginTop: '12pt', textAlign: 'center', lineHeight: '115%', fontSize: '9pt' }}><span style={{ fontWeight: 'bold' }}>departure_time</span></p>
                        </td>
                    </tr>
                        <tr style={{ height: '23.25pt' }}>
                            <td style={{ borderRightStyle: 'solid', borderRightWidth: '1pt', borderBottomStyle: 'solid', borderBottomWidth: '1pt', padding: '6pt 5.5pt 5.5pt', verticalAlign: 'top', backgroundColor: '#f5f5f5' }}>
                                <p style={{ marginTop: '12pt', textAlign: 'center', lineHeight: '115%', fontSize: '9pt' }}><span style={{ fontWeight: 'bold' }}>Min</span></p>
                            </td>
                            <td style={{ borderStyle: 'solid', borderWidth: '1pt', padding: '5.5pt', verticalAlign: 'top', backgroundColor: '#f5f5f5' }}>
                                <p style={{ marginTop: '12pt', textAlign: 'center', lineHeight: '115%', fontSize: '9pt' }}><span>02:19:00</span>
                                </p>
                            </td>
                            <td style={{ borderTopStyle: 'solid', borderTopWidth: '1pt', borderBottomStyle: 'solid', borderBottomWidth: '1pt', padding: '5.5pt 5.5pt 5.5pt 6pt', verticalAlign: 'top', backgroundColor: '#f5f5f5' }}>
                                <p style={{ marginTop: '12pt', textAlign: 'center', lineHeight: '115%', fontSize: '9pt' }}><span>02:19:00</span>
                                </p>
                            </td>
                        </tr>
                        <tr style={{ height: '23.25pt' }}>
                            <td style={{ borderRightStyle: 'solid', borderRightWidth: '1pt', padding: '6pt 5.5pt 5.5pt', verticalAlign: 'top', backgroundColor: '#ffffff' }}>
                                <p style={{ marginTop: '12pt', textAlign: 'center', lineHeight: '115%', fontSize: '9pt' }}><span style={{ fontWeight: 'bold' }}>Max</span></p>
                            </td>
                            <td style={{ borderRightStyle: 'solid', borderRightWidth: '1pt', borderLeftStyle: 'solid', borderLeftWidth: '1pt', padding: '6pt 5.5pt 5.5pt', verticalAlign: 'top', backgroundColor: '#ffffff' }}>
                                <p style={{ marginTop: '12pt', textAlign: 'center', lineHeight: '115%', fontSize: '9pt' }}><span>30:45:00</span>
                                </p>
                            </td>
                            <td style={{ padding: '6pt 5.5pt 5.5pt 6pt', verticalAlign: 'top', backgroundColor: '#ffffff' }}>
                                <p style={{ marginTop: '12pt', textAlign: 'center', lineHeight: '115%', fontSize: '9pt' }}><span>30:45:00</span>
                                </p>
                            </td>
                        </tr>
                    </tbody></table>
                <p><span style={{ AwImport: 'ignore' }}>&nbsp;</span></p>
                <p><span>These times provided by the "Secretaria de Movilidad" are corrupted given that:</span></p>
                <p style={{ marginLeft: '36pt', textIndent: '-18pt', AwImport: 'list-item', AwListLevelNumber: 0, AwListNumberFormat: '"●"', AwListNumberStyles: '"bullet"', AwListPaddingSml: '11.36pt' }}>
                    <span style={{ AwImport: 'ignore' }}><span><span>●</span></span><span style={{ width: '11.36pt', font: '7pt "Times New Roman"', display: 'inline-block', AwImport: 'spaces' }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    </span></span><span>They seem to have been calculated or recorded without taking into account that after
                        the time "23:59:59" the zero hour starts again but on the following day.</span></p>
                <p style={{ marginLeft: '36pt', textIndent: '-18pt', AwImport: 'list-item', AwListLevelNumber: 0, AwListNumberFormat: '"●"', AwListNumberStyles: '"bullet"', AwListPaddingSml: '11.36pt' }}>
                    <span style={{ AwImport: 'ignore' }}><span><span>●</span></span><span style={{ width: '11.36pt', font: '7pt "Times New Roman"', display: 'inline-block', AwImport: 'spaces' }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    </span></span><span>The variables "arrival_time" and "departure_time" have equal records, as if the
                        arrival and departure had been at the same instant of time.</span></p>
                <p style={{ textAlign: 'justify' }}><span style={{ AwImport: 'ignore' }}>&nbsp;</span></p>
                <p style={{ textAlign: 'justify' }}><span>These aspects are fundamental for the development of the project and will be
                    reviewed with the client shortly.</span></p>
                <p><span style={{ AwImport: 'ignore' }}>&nbsp;</span></p>
                <p style={{ textAlign: 'justify' }}><span style={{ fontWeight: 'bold', color: '#202124' }}>GEOJSON BOGOTA:</span></p>
                <p style={{ textAlign: 'justify' }}><span style={{ fontWeight: 'bold', color: '#202124', AwImport: 'ignore' }}>&nbsp;</span></p>
                <p style={{ textAlign: 'justify' }}><span style={{ color: '#202124' }}>In the below github link there is a GeoJson of the
                    neighborhoods of Bogota: </span></p>
                <p style={{ textAlign: 'justify' }}><a href="https://gist.github.com/john-guerra/ee93225ca2c671b3550d62614f4978f3" style={{ textDecoration: 'none' }}><span style={{ textDecoration: 'underline', color: '#1155cc' }}>GeoJson Map of
                    Bogotá (github.com)</span></a></p>
                <p style={{ textAlign: 'justify' }}><span style={{ color: '#202124', AwImport: 'ignore' }}>&nbsp;</span></p>
                <p style={{ textAlign: 'justify' }}><span style={{ color: '#202124' }}>That file is in Json format and contains an array of
                    latitude and longitude for each point that composes a geometry polygon that describes the neighborhood’s
                    borders. </span></p>
                <p style={{ textAlign: 'justify' }}><span style={{ color: '#202124', AwImport: 'ignore' }}>&nbsp;</span></p>
                <p style={{ textAlign: 'justify' }}><span style={{ color: '#202124' }}>Here is an image of the entire map:</span></p>
                <p style={{ textAlign: 'center' }}><img className='img-fluid' src="images/map1.png" alt="" style={{ AwLeftPos: '0pt', AwRelHpos: 'column', AwRelVpos: 'paragraph', AwTopPos: '0pt', AwWrapType: 'inline' }} />
                </p>
                <p style={{ textAlign: 'justify' }}><span style={{ fontWeight: 'bold', color: '#202124', AwImport: 'ignore' }}>&nbsp;</span></p>
                <p style={{ textAlign: 'justify' }}><span style={{ fontWeight: 'bold', color: '#202124', AwImport: 'ignore' }}>&nbsp;</span></p>
                <p style={{ textAlign: 'justify' }}><span style={{ fontWeight: 'bold', color: '#202124', AwImport: 'ignore' }}>&nbsp;</span></p>
                <p style={{ textAlign: 'justify' }}><span style={{ fontWeight: 'bold', color: '#202124', AwImport: 'ignore' }}>&nbsp;</span></p>
                <p style={{ textAlign: 'justify' }}><span style={{ fontWeight: 'bold', color: '#202124', AwImport: 'ignore' }}>&nbsp;</span></p>
                {/* <div style={{AwHeaderfooterType: 'linked', clear: 'both'}}>
              <p><img src="images/Aspose.Words.dd33de32-b9ba-4c01-94ce-f79ebf04b41e.002.jpeg" width={798} height={841} alt="" style={{AwLeftPos: '-43.5pt', AwRelHpos: 'column', AwRelVpos: 'paragraph', AwTopPos: '11435.16pt', AwWrapType: 'topbottom'}} /><br />
              </p>
            </div> */}
            </div><br style={{ pageBreakBefore: 'always', clear: 'both', msoBreakType: 'section-break' }} />
            <div>
                <div style={{ AwHeaderfooterType: 'linked', clear: 'both' }}>
                    <p style={{ marginLeft: '36pt' }}><span style={{ AwImport: 'ignore' }}>&nbsp;</span></p>
                </div>
                <p style={{ marginLeft: '36pt', textAlign: 'center' }}><span style={{ fontWeight: 'bold' }}>FE MOCKUP</span></p>
                <p style={{ marginLeft: '36pt', textAlign: 'center' }}><span style={{ fontWeight: 'bold', AwImport: 'ignore' }}>&nbsp;</span>
                </p>
                <p style={{ textAlign: 'justify' }}><span>The purpose of the application is to estimate trip times. Therefore the
                    mockups propose a map that occupies all the space of the user's screen, offering the necessary and
                    sufficient information to understand its purpose; this information corresponds to the title "Find the
                    time your trip will take". In addition, a form is offered. This will store the origin, destination, and
                    departure time data. These fields feed the inputs required by the prediction model. </span></p>
                <p style={{ textAlign: 'justify' }}><span style={{ AwImport: 'ignore' }}>&nbsp;</span></p>
                <p style={{ textAlign: 'justify' }}><span>After submitting this form, the information offered in the side panel
                    changes slightly.</span><span style={{ AwImport: 'spaces' }}>&nbsp; </span><span>The side panel displays the
                        search information with the time estimated by the model. Also offers the user a visualization with the
                        estimated time of arrival. </span></p>
                <p style={{ textAlign: 'justify' }}><span style={{ AwImport: 'ignore' }}>&nbsp;</span></p>
                <p style={{ textAlign: 'justify' }}><span>A footer section is added with Transmilenio contact information. The
                    official logo and link to social networks is included to generate confidence in the user. Finally, the
                    development team’s contact information is provided.</span></p>
                <p style={{ marginLeft: '36pt', textAlign: 'center' }}><span style={{ fontWeight: 'bold', AwImport: 'ignore' }}>&nbsp;</span>
                </p>
                <p style={{ marginLeft: '36pt', textAlign: 'center' }}><span style={{ fontWeight: 'bold', AwImport: 'ignore' }}>&nbsp;</span>
                </p>
                <div style={{ AwHeaderfooterType: 'linked', clear: 'both' }}>
                    <p style={{ textAlign: 'center' }}><img className='img-fluid' src="/images/FEMockup1.jpg" width={798} height={841} alt="" style={{ AwLeftPos: '-43.5pt', AwRelHpos: 'column', AwRelVpos: 'paragraph', AwTopPos: '11435.16pt', AwWrapType: 'topbottom' }} /><br />
                    </p>
                </div>
                <br />
                <p style={{ marginLeft: '', textAlign: 'center' }}><img className='img-fluid' src="/images/FEMockup2.jpg" width={798} height={839} alt="" style={{ AwLeftPos: '-74.25pt', AwRelHpos: 'column', AwRelVpos: 'paragraph', AwTopPos: '19.64pt', AwWrapType: 'topbottom' }} /><br />
                </p>
                <p style={{ textAlign: 'justify' }}><span style={{ AwImport: 'ignore' }}>&nbsp;</span></p>

            </div>
        </div>
    );
}

export default EDA