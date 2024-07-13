<b>Periodic Table free to use API with sound recorded by me</b>
<hr />
💧Get All Elements :- http://localhost:3000/api/elements
<br />
💧Get Element with Atomic Number :- http://localhost:3000/api/elements/1
<br />
ㅤ<i>(Replace 1 with any Atomic Number from 1 to 118)</i>
<br />
💧Get Element with Symbol :- http://localhost:3000/api/elements/symbol/H
<br />
ㅤ<i>(Replace H with any symbol like He, Li, Be, ... etc)</i> <br /><br />
<img src="https://i.ibb.co/7QxfGzr/Screenshot-2024-07-13-193327.png" alt="Hydrogen" width="500" />
<br /><br />
<b>Filtering Search Results :-</b>
<hr />
<u>Filter by type :-</u>
<br />
💧http://localhost:3000/api/elements?type=non-metal
<br>
<i>type can have the following values</i>
<li>alkali-metal</li>
<li>alkaline-earth</li>
<li>transition-metal</li>
<li>basic-metal</li>
<li>metalloid</li>
<li>non-metal</li>
<li>halogen</li>
<li>noble-gas</li>
<li>actinide</li>
<li>lanthanide</li>
<li>less-known</li>
<br>
<u>Filter by standard state :-</u>
<br />
💧http://localhost:3000/api/elements?standard_state=solid
<br>
<i>standard state can have the following values</i>
<li>solid</li>
<li>liquid</li>
<li>gas</li>
<br>
<u>Filter by group number :-</u>
<br />
💧http://localhost:3000/api/elements?group_number=1
<br>
<i>group number can vary from 1-18</i>
<br><br>
<u>Filter by period number :-</u>
<br />
💧http://localhost:3000/api/elements?period_number=1
<br>
<i>group number can vary from 1-7</i>
<br><br>
<b>Note :- </b>
<br>
<u>two queries can be combined using '&'</u>
<br>
💧http://localhost:3000/api/elements?group_number=14&type=basic-metal
<br><br>
