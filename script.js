const endpoint = "https://script.google.com/macros/s/AKfycbxIS_dOZSbnS2kgohcgEERnQXlZMRJY7hshYkj3t09sie_JF0iFxPg5FDnZKOPx4B5xQA/exec"
const datalists = []
const log = document.getElementById('log');

fetch(endpoint)
.then(response => response.json())
.then(data=>{
    data.forEach(element => {
        //log.innerHTML += Object.keys(element)
        datalists.push(element)
    })
    
    let length = Object.keys(datalists[0]).length
    let name = []

    const wrapper = document.getElementById("wrapper")
    const table = document.createElement("table")
    table.className = 'usertable'
    let tr = document.createElement("tr")

    for( let i=0; i<length; i++ ) {
        name.push(Object.keys(datalists[0])[i])
        const td = document.createElement("td")
        td.innerHTML = name[i]
        tr.appendChild(td)
    }
    table.appendChild(tr)
    //log.innerHTML += name[0] //keyの名前を確認
    
    datalists.map((obj,index)=> {
        let tr = document.createElement("tr")
        for(let i=0; i<name.length; i++) {
            const td = document.createElement("td")
            td.innerHTML = obj[name[i]] //name[i]でkey指定してvalueを取り出す
            //log.innerHTML += obj[name[i]]
            tr.appendChild(td)
        }
        table.appendChild(tr)
    })
    wrapper.appendChild(table)
})