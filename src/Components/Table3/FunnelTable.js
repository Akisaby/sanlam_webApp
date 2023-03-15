import React from 'react'
import './Funtable.css'

const FunnelTable = () => {
  return (
    <div className='Ed-body'>
     <div className='Ed-table'>
        <h1><u>SIMULATION: RENTE FUNNELA MIXTE</u></h1>
  <form>
<div class="row">
<div class="col-25"><label for="fname">Funeral Operation chosen?</label></div>
<div class="col-75">
   <select id="country" name="country">
        <option value="Y">Yes</option>
        <option value="N">No</option>
        
</select>
<br></br></div>
<div class="col-25" ><label for="lname">Monthly salary</label></div>
<div class="col-75"><input type="text" id="lname" name="lname"></input><br></br></div>
<div class="col-25"><label for="lname">Paid Premium</label></div>
<div class="col-75"><input type="text" id="lname" name="lname"></input><br></br></div>
<div class="col-25"><label for="lname">Age</label></div>
<div class="col-75"><input type="text" id="lname" name="lname"></input><br></br></div>
<input type="submit" value="Submit"></input>
</div>
<div className='Ed-tab'>
<center><h1>COVER DETAILS </h1></center>
        <h1><u>1.SAFE FAMILY POLICY</u></h1>
        <table className='tab'>
        <tr>
          <thead>
          <th>COVER</th>
          <th>SUM ASSURED</th>
          <th>MODAL PREMIUM</th>
          </thead>
        </tr>
        <tbody>
          <tr>
          <td>Death/TPD</td>
          <td>.....</td>
          <td>.....</td>
        </tr>
        <tr>
          <td>PPD</td>
          <td>.....</td>
          <td>.....</td>
        </tr>
        <tr>
          <td>Loss of Income</td>
          <td>.....</td>
          <td>.....</td>
        </tr>
        <tr>
          <td> </td>
          <td> </td>
          <td> </td>
        </tr>
        <tr>
          <td>TOTAL</td>
          <td>.....</td>
          <td>.....</td>
        </tr>
        <tr>
          <td>Monthly Premium</td>
          <td> </td>
          <td>.....</td> 
          </tr>
        </tbody>
        </table>
        <h1><u>2.FUNERAL POLICY</u></h1>
        <table>
        <tr>
          <thead>
          <th>COVER</th>
          <th>SUM ASSURED</th>
          <th>MODAL PREMIUM</th>
          </thead>
          </tr>
          <tbody>
          <tr>
          <td>Family funeral cash</td>
          <td>.....</td>
          <td>.....</td> 
          </tr>
          <tr>
          <td>Monthly Premium</td>
          <td> </td>
          <td>.....</td> 
          </tr>
          <tr>
          <td> </td>
          <td> </td>
          <td> </td> 
          </tr>
          <tr>
          <td>MONTHLY RISK PREMIUM</td>
          <td> </td>
          <td>...</td> 
          </tr>
          <tr>
          <td>MONTHLY SAVING PREMIUM</td>
          <td> </td>
          <td>...</td> 
          </tr>
          <tr>
          <td>TOTAL MONTHLY PREMIUM</td>
          <td> </td>
          <td>...</td> 
          </tr> 
          </tbody>
    </table>
</div>
</form>
<br></br><br></br>
<div className='side-tab'>
<center><h1 className='sur'><u>Surrender values</u></h1></center>
        <table className='center'>
        <tr>
          <td>Year 1</td>
          <td>...</td>
        </tr>
        <tr>
        <td>Year 2</td>
          <td>...</td>
        </tr>
        <tr>
        <td>Year 3</td>
          <td>...</td>
        </tr>
        <tr>
        <td>Year 4</td>
          <td>...</td>
        </tr>
        <tr>
        <td>Year 5</td>
          <td>...</td>
        </tr>
        <tr>
        <td>Year 6</td>
          <td>...</td>
        </tr>
        <tr>
        <td>Year ...</td>
          <td>...</td>
        </tr>
        </table>
</div>
</div>
</div>
  )
}

export default FunnelTable