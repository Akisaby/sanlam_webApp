import React from 'react'
import './Eductable.css'

const EducationTable = () => {
  return (
    <div className='Ed-body'>
     <div className='Ed-head'>
        <h1>SORAS - VIE Ltd</h1>
        <h1>DIRECTION TECHNIQUE</h1>
        <h1>SERVICE DES OPERATIONS TECHNIQUES	</h1>
     </div>
     <div className='Ed-table'>
        <h1><u>SIMULATION: RENTE EDUCATION MIXTE</u></h1>
        <form>
<div class="row">
<div class="col-25"><label for="fname">Donnees</label></div>
<div class="col-75">
<select id="country" name="country">
        <option value="prime">PRIME</option>
        <option value="minerval">MINERVAL</option>
        
</select>
<br></br></div>
<div class="col-25"><label for="lname">Annee de Naissance</label></div>
<div class="col-75"><input type="text" id="lname" name="lname"></input><br></br></div>
<div class="col-25"><label for="lname">Periodicite de Prime</label></div>
<div class="col-75">
<select id="country" name="country">
        <option value="prime">Mensuelle</option>
        <option value="prime">Trimestrielle</option>
        <option value="prime">Semestrielle</option>
        <option value="minerval">Annuelle</option>
        
</select><br></br></div>
<div class="col-25"><label for="lname">PRIME</label></div>
<div class="col-75"><input type="text" id="lname" name="lname"></input><br></br></div>
<div class="col-25"><label for="lname">Duree du differe</label></div>
<div class="col-75"><input type="text" id="lname" name="lname"></input><br></br></div>
<div class="col-25"><label for="lname">Fraction de la Rente pendant de Differe</label></div>
<div class="col-75">
<select id="country" name="country">
        <option value="prime">25%</option>
        <option value="prime">50%</option></select><br></br></div>
<div class="col-25"><label for="lname">Periodicite de la Rente</label></div>
<div class="col-75">
<select id="country" name="country">
        <option value="prime">Trimestrielle</option>
        <option value="prime">Semestrielle</option>
        <option value="minerval">Annuelle</option></select><br></br></div>
<br></br>
<input type="submit" value="Submit"></input>
</div>
</form>
<br></br><br></br>
<div>
<table className='table1'>  

    <tbody>
          {/* <tr>
          <td>Année de Naissance</td>
          <td>1988</td>
    </tr>
    <tr>
      <td>Periodicité de Prime</td>
      <td> Mensuelle</td>
    </tr>
    <tr>
      <td> PRIME</td>
      <td>  20,000 </td>
    </tr>
    <tr>
      <td>Durée du différé</td>
      <td>6</td>
    </tr>
    <tr>
      <td>Durée de la Rente</td>
      <td>6</td>
    </tr>
    <tr>
      <td>Fraction de la Rente pendant le <br/> Différé</td>
      <td>50%</td>
    </tr>
    <tr>
      <td>Periodicité de la Rente</td>
      <td>Annuelle</td>
    </tr> */}
  </tbody>
</table>
      
<table>
        <tr>
            <td>Rente pendant le différé</td>
            <td className='yellow-card'>  from.. </td>
        </tr>
        <tr className='black-card'>
            <td>.</td>
            <td>.</td>
        </tr>
        <tr>
            <td>Rente par An</td>
            <td className='yellow-card'>from..</td>
        </tr>
</table>
</div>
</div>
  <div className='Ed-footer'>
        <p>Fait à Kigali, le	15-Oct-2019</p>
        <p>Service Technique</p>
   </div>

</div>
  )
}

export default EducationTable