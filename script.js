function insert_Row() {
    //Write your code here
let tabelbody=documentById("sampleTable")
	let btn=document.querySelector('button')

	btn.addEventListener('click',addrow)
	function addRow() {
		let row=tabelbody.insertRow(0)
		row.insertCell(0).innerHTML="New Cell1"
		row.insertCell(1).innerHTML="New Cell2"
	}
	
	
  
}

addRow({"New Cell1","New Cell2"})