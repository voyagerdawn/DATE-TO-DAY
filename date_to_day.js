//EXPRESS FRAMEWORK
const express = require('express');
const app = express();

//GET REQUEST AND RESPONSE PARAMS 
app.get('/getDay/:date', (req, res) => {
  const dateStr = req.params.date;
  
  //CHECK IF DATE STRING LENGTH IS 6 MATCHING DDMMYY FORMAT
  if (/^\d{6}$/.test(dateStr)) {
    const day = getDayFromDate(dateStr);
    res.json({ day });
  } else { 
    //ERROR HANDLING
    res.status(400).json({ error: 'Invalid date format. Please use DDMMYY.' });
  }
});

//FUNCT TO SLICE STR ACCORDING TO THE DATE FORMAT AND MAP THE DAY TO DATE USING UTC METHOD
function getDayFromDate(dateStr) {
  const day = new Date(`${dateStr.slice(2,4)}/${dateStr.slice(0,2)}/${dateStr.slice(4,5)}`);
  const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  
  return daysOfWeek[day.getUTCDay()];
}

//SETTING UP SERVER 
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Listening on port 3000...`);
});
