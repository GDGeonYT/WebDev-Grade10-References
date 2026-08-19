// Object Handler
class PC {
  constructor(gpu, cpu, storage, ram) {
    this.gpu = gpu;
    this.cpu = cpu;
    this.storage = storage;
    this.ram = ram;
  }
}

// Store Data
document.querySelector("#pcForm").addEventListener("submit", (event)=>{
  event.preventDefault();

  const gpu =  document.querySelector('#gpu').value;
  const cpu =  document.querySelector('#cpu').value;
  const storage =  document.querySelector('#storage').value;
  const ram =  document.querySelector('#ram').value;


  const pc = new PC(gpu, cpu, storage, ram)
  ui.displaydetails(pc)
  console.log(pc)
})

// User Interface
class ui {
  static stored() {
    fetch("./stored.json")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const pc = data.samples;
        pc.forEach((pc) => ui.displaydetails(pc));
      });
  }

  static displaydetails(pc) {
    const table = document.querySelector("#table");
    const row = document.createElement("tr");

    row.innerHTML = `
      <td>${pc.gpu}</td>
      <td>${pc.cpu}</td>
      <td>${pc.storage}</td>
      <td>${pc.ram}</td>
      <td><button class="btn btn-danger delete">Del</button></td>
    `;
    table.appendChild(row);
  }
    static ded(el) {
    if (el.table.contains("delete")) {
      el.parentElement.parentElement.remove();
    }
  }
}


// Display Data
ui.stored();


document.querySelector("#table").addEventListener("click", (e)=>{
  ui.ded(e.target);
});




