
 //myLeads = [ "ahsar", "per", "john"]
//create a empty array so we can add user data

  myLeads = []

const inputEl = document.getElementById("input-el")

const inputBtn = document.getElementById("input-btn")
const ulEl =  document.getElementById("ul-el")
inputBtn.addEventListener("click", function () {

    // console.log("button was clciked")

// /    myLeads.push ("www.awesomeleads.com") // push what user writes to array 
       
        myLeads.push(inputEl.value)  // push whatever is written in input box to myLeads array
        inputEl.value = ""  // to clear input value when clicked 
     renderLeads()

})
function renderLeads(){

  let listItems = ""

  for ( i =0; i < myLeads.length ; i++) {  // checking to render out on page 
  
      //console.log (myLeads[i])
    
        // listItems += "<li> <a  target = '_blank' href ='myLeads[i]'>" + myLeads[i] + " </a></li>" // for space 
        
        listItems += `<li>
                           <a  target = '_blank' href ='${myLeads[i]}'>
                           
                           ${myLeads[i]} </a>
                   
                </li>` // for space 
   
      }
               ulEl.innerHTML = listItems
  
}


deleteBtn.addEventListener("dblclick", function() {
  localStorage.clear()
  myLeads = []
  render(myLeads)
})

inputBtn.addEventListener("click", function() {
  myLeads.push(inputEl.value)
  inputEl.value = ""
  localStorage.setItem("myLeads", JSON.stringify(myLeads) )
  render(myLeads)
})