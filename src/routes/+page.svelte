<style>
  h1 {
    background-color: rgb(100, 100, 202);
    color: white;
    width:80%;
    padding: 20px;
    margin: 20px;
    text-align:center;
    border-radius: 0.5em;
  }

  .container, .camera-container {
    display: flex;
    align-items: center;
    justify-content: center;
  }
</style>
<script>
  let checkedOut = $state([]);
  async function checkOut (camNumber) {
    
    let camId = "#cam" + camNumber;

    if(!checkedOut.includes(camId)) {
      checkedOut.push(camId);
    } else {
      let checkoutName = prompt("Name?");
      let index = checkedOut.indexOf(camId);
      checkedOut.splice(index,1);
    }
    await checkoutCamera(camId, checkoutName);
  }
</script>
<div class="container">
  <h1>Camera Check out</h1>
</div>
<div class="camera-container">
  
  <div>
    <button type="button" class="btn {checkedOut.includes("#cam5")? "btn-danger":"btn-primary"} " id="cam5" onclick="{()=> { checkOut(5)}}">Camera 5</button>
    <button type="button" class="btn {checkedOut.includes("#cam2")? "btn-danger":"btn-primary"} " id="cam2" onclick="{()=> { checkOut(2)}}">Camera 2</button>
    <button type="button" class="btn {checkedOut.includes("#cam10")? "btn-danger":"btn-primary"} " id="cam10" onclick="{()=> { checkOut(10)}}">Camera 10</button>
    <button type="button" class="btn {checkedOut.includes("#cam17")? "btn-danger":"btn-primary"} " id="cam17" onclick="{()=> { checkOut(17)}}">Camera 17</button>
    <button type="button" class="btn {checkedOut.includes("#cam21")? "btn-danger":"btn-primary"} " id="cam21" onclick="{()=> { checkOut(21)}}">Camera 21</button>
  </div>
</div>