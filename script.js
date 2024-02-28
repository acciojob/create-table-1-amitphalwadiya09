function insert_Row() {
    //Write your code here
let tabelbody=document.getElementById("sampleTable")
	let btn=document.querySelector('input')

	btn.addEventListener('click',addRow)
	function addRow() {
		let row=tabelbody.insertRow(0)
		row.insertCell(0).innerHTML="New Cell1"
		row.insertCell(1).innerHTML="New Cell2"
	}
	
	
  
}

addRow({"New Cell1","New Cell2"})