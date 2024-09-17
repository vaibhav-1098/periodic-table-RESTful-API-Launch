# periodic-table-rest-api

<u>Base URL</u> : https://periodic-table-api-rana.vercel.app <br>

🟢 GET /api/elements: Retrieve a list of all element. <br>
🟢 GET /api/element/:number: Get element by its Atomic Number. <br>
🟢 GET /api/element/symbol/:symbol: Get element by its Symbol. <br>
🔴 POST /api/element/new: Create a new element. <br>
🔴 PATCH /api/element/update/:id: Update element by its ID. <br>
🔴 DELETE /api/element/delete/:id: Delete element by its ID. <br>

<b>Periodic Table free to use API with sound recorded by me</b>
<hr />
💧Get All Elements :- https://periodic-table-api-rana.vercel.app/api/elements
<br />
💧Get Element with Atomic Number :- https://periodic-table-api-rana.vercel.app/api/element/1
<br />
ㅤ<i>(Replace 1 with any Atomic Number from 1 to 118)</i>
<br />
💧Get Element with Symbol :- https://periodic-table-api-rana.vercel.app/api/element/symbol/H
<br />
ㅤ<i>(Replace H with any symbol like He, Li, Be, ... etc)</i> <br /><br />
<img src="https://i.ibb.co/7QxfGzr/Screenshot-2024-07-13-193327.png" alt="Hydrogen" width="500" />
<br /><br />
<b>Filtering Search Results :-</b>
<hr />
<u>Filter by type :-</u>
<br />
💧https://periodic-table-api-rana.vercel.app/api/elements?type=non-metal
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
💧https://periodic-table-api-rana.vercel.app//api/elements?standard_state=solid
<br>
<i>standard state can have the following values</i>
<li>solid</li>
<li>liquid</li>
<li>gas</li>
<br>
<u>Filter by group number :-</u>
<br />
💧https://periodic-table-api-rana.vercel.app/api/elements?group_number=1
<br>
<li>group number can vary from 1-18</li>
<br><br>
<u>Filter by period number :-</u>
<br />
💧https://periodic-table-api-rana.vercel.app/api/elements?period_number=1
<br>
<li>group number can vary from 1-7</li>
<br><br>
<b>Note :- </b>
<br>
<u>two queries can be combined using '&'</u>
<br>
💧https://periodic-table-api-rana.vercel.app/api/elements?group_number=14&type=basic-metal
<br><br>
