function buildHarbor() {
  //element instantiation
  let content = document.getElementById("content");
  let harbor = document.createElement("div");
  harbor.id = "harbor";
  let boatRow1 = document.createElement("div");
  boatRow1.className = "boatRow";
  let boatRow2 = document.createElement("div");
  boatRow2.className = "boatRow";
  let boatBox__carrier = document.createElement("div");
  boatBox__carrier.id = "boatBox__carrier";
  let segmented__carrier = document.createElement("div");
  segmented__carrier.id = "segmented__carrier";
  segmented__carrier.draggable = "true";
  segmented__carrier.title = "Carrier";
  let boatBox__battleship = document.createElement("div");
  boatBox__battleship.id = "boatBox__battleship";
  let segmented__battleship = document.createElement("div");
  segmented__battleship.id = "segmented__battleship";
  segmented__battleship.draggable = "true";
  segmented__battleship.title = "Battleship";
  let boatBox__destroyer = document.createElement("div");
  boatBox__destroyer.id = "boatBox__destroyer";
  let segmented__destroyer = document.createElement("div");
  segmented__destroyer.id = "segmented__destroyer";
  segmented__destroyer.draggable = "true";
  segmented__destroyer.title = "Destroyer";
  let boatBox__submarine = document.createElement("div");
  boatBox__submarine.id = "boatBox__submarine";
  let segmented__submarine = document.createElement("div");
  segmented__submarine.id = "segmented__submarine";
  segmented__submarine.draggable = "true";
  segmented__submarine.title = "Submarine";
  let boatBox__patrolboat = document.createElement("div");
  boatBox__submarine.id = "boatBox__patrolboat";
  let segmented__patrolboat = document.createElement("div");
  segmented__patrolboat.id = "segmented__patrolboat";
  segmented__patrolboat.draggable = "true";
  segmented__patrolboat.title = "Patrol Boat";
  //element instantiation

  for (let i = 0; i < 5; i++) {
    let segment = document.createElement("div");
    segment.className = "segment";
    segmented__carrier.appendChild(segment);
  }
  boatBox__carrier.appendChild(segmented__carrier);
  //
  for (let i = 0; i < 4; i++) {
    let segment = document.createElement("div");
    segment.className = "segment";
    segmented__battleship.appendChild(segment);
  }
  boatBox__battleship.appendChild(segmented__battleship);
  //
  boatRow1.appendChild(boatBox__carrier);
  boatRow1.appendChild(boatBox__battleship);
  //
  harbor.appendChild(boatRow1);
  //
  for (let i = 0; i < 3; i++) {
    let segment = document.createElement("div");
    segment.className = "segment";
    segmented__destroyer.appendChild(segment);
  }
  boatBox__destroyer.appendChild(segmented__destroyer);
  //
  for (let i = 0; i < 3; i++) {
    let segment = document.createElement("div");
    segment.className = "segment";
    segmented__submarine.appendChild(segment);
  }
  boatBox__submarine.appendChild(segmented__submarine);
  //
  for (let i = 0; i < 2; i++) {
    let segment = document.createElement("div");
    segment.className = "segment";
    segmented__patrolboat.appendChild(segment);
  }
  boatBox__patrolboat.appendChild(segmented__patrolboat);
  //
  boatRow2.appendChild(boatBox__destroyer);
  boatRow2.appendChild(boatBox__submarine);
  boatRow2.appendChild(boatBox__patrolboat);
  //
  harbor.appendChild(boatRow2);
  content.appendChild(harbor);
}
export { buildHarbor };

// <div id="harbor">
//   <div class="boatRow">
//     <div id="boatBox__carrier">
//       <div draggable="true" id="segmented__carrier" title="Carrier">
//         <div class="segment"></div>
//         <div class="segment"></div>
//         <div class="segment"></div>
//         <div class="segment"></div>
//         <div class="segment"></div>
//       </div>
//     </div>
//     <div id="boatBox__battleship">
//       <div draggable="true" id="segmented__battleship" title="Battleship">
//         <div class="segment"></div>
//         <div class="segment"></div>
//         <div class="segment"></div>
//         <div class="segment"></div>
//       </div>
//     </div>
//   </div>
//   <div class="boatRow">
//     <div id="boatBox__destroyer">
//       <div draggable="true" id="segmented__destroyer" title="Destroyer">
//         <div class="segment"></div>
//         <div class="segment"></div>
//         <div class="segment"></div>
//       </div>
//     </div>
//     <div id="boatBox__submarine">
//       <div draggable="true" id="segmented__submarine" title="Submarine">
//         <div class="segment"></div>
//         <div class="segment"></div>
//         <div class="segment"></div>
//       </div>
//     </div>
//     <div id="boatBox__patrolboat">
//       <div draggable="true" id="segmented__patrolboat" title="Patrol Boat">
//         <div class="segment"></div>
//         <div class="segment"></div>
//       </div>
//     </div>
//   </div>
// </div>;
