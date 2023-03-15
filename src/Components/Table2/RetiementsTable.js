import React from 'react'

const RetiementsTable = () => {
  return (
    <div>
        <div className='Ed-body'>
     <div className='Ed-head'>
        <h1>SANLAM VIE Plc</h1>
        <h1>DIRECTION DES OPERATIONS</h1>
     </div>
     <div className='Ed-footer'>
        <h1 className='yellow-card'> <b>SIMULATION 2021</b></h1></div>
     <div className='Ed-table'>
        <h1><u>SIMULATION: PREVOYANCE RETRAITE</u></h1>
        <form>
        <div class="col-25"><label for="Date d'effet">Date d'effet</label></div>
       
        <div class="col-75"><input type="date" id="Date d'effet" name="Date d'effet"></input> </div><br></br>
<div class="col-25"><label for="lname"> Date de naissance</label></div>
<div class="col-75"><input type="date" id="Date de naissance" name="Date de naissance" /><br></br></div>
<div class="col-25"><label for="lname">Prime mensuelle</label></div>
<div class="col-75"><input type="text" id="lname" name="lname"></input><br></br></div>
<div class="col-25"><label for="lname">Duree</label></div>
<div class="col-75"><input type="text" id="lname" name="lname" autocomplete="on" value="20001"></input><br></br></div>
<input type="submit" value="Submit"></input>
        </form>
      

        {/* <table className='table1'>
          
       <tbody>
         <tr>
          <td>Date d'effet</td>
          <td>21-Dec-22</td>
    </tr>
    <tr>
      <td>Date de naissance</td>
      <td> 1985</td>
    </tr>
    <tr>
      <td> Prime mensuelle</td>
      <td>  Durée </td>
    </tr>
  </tbody>
 </table> */}
      


      <table className='table1'>
        <tr>
            <td>Capital décès toute cause</td>
            <td>  ...... </td>
        </tr>
        <tr>
            <td>RCapital garanti au terme</td>
            <td>.....</td>
        </tr>
      </table>

      <table>
        <tr>
            <td>Valeur de rachat minimale:</td>
        </tr>
        <tr>
            <td>.</td>
            <td>année 1</td>
            <td>année 2</td>
            <td>année 3</td>
            <td>année 4</td>
            <td>année 5</td>
            <td>année 6</td>
        </tr>
        <tr>
            <td> </td>
            <td> </td>
            <td> </td>
            <td>...</td>
            <td>...</td>
            <td>...</td>
            <td>...</td>
        </tr>
      </table> 

     </div>
     <div className='Ed-footer'>
        <p>Fait à Kigali, le	21-Dec-2022</p>
        <p>Direction des Opérations	</p>
        </div>

    </div>
    </div>
  )
}

export default RetiementsTable