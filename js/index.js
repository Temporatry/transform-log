//$.PAYLOAD = new Object();

$(document).ready(function () {
  $("#file").change(getDataPointsFromCSV);
});

function handleDragOver(evt) {
  evt.stopPropagation();
  evt.preventDefault();
  let dropZone = document.getElementById("drop_zone");
  dropZone.classList.add("fileHover");
}
function handleDragleave(evt) {
  evt.stopPropagation();
  evt.preventDefault();
  let dropZone = document.getElementById("drop_zone");
  dropZone.classList.remove("fileHover");
}
function handleFileSelect(evt) {
  evt.stopPropagation();
  evt.preventDefault();
  let dropZone = document.getElementById("drop_zone");
  dropZone.classList.remove("fileHover");
  console.log(evt.dataTransfer.files);
  getDataPointsFromCSV(evt);
}

// drop file
var dropZone = document.getElementById('drop_zone');
dropZone.addEventListener('dragover', handleDragOver, false);
dropZone.addEventListener('dragleave', handleDragleave, false);
dropZone.addEventListener('drop', handleFileSelect, false);


// 按鈕點擊上傳檔案
function dropzoneClick(evt) {
  $('#file').click();
}

function getDataPointsFromCSV(csv) {
  //console.log(csv.target.files[0])
  let dataPoints1 = [];
  let dataPoints2 = [];
  let dataPoints3 = [];
  let dataPoints4 = [];
  let data = csv.target.files || csv.dataTransfer.files;
  let file = data[0];

  // console.log(csv.target.files[0])
  // console.log(csv.target.files[1])
  Papa.parse(file, {
    header: true,
    dynamicTyping: true,
    complete: function (results) {
      console.log(results.data.length);
      let obj="";
      for(let i=0;i<results.data.length-1;i++){
        obj += `{"gameid":"${results.data[i]['game_id']}","moveno":"${results.data[i]['move_no']}","movetime":"${results.data[i]['move_time']}","status":"true"}\r\n`;
      }
      console.log(obj);
    }
  });

}


//{"gameid":"WCCI-2016-GO-1813","moveno":"1","movetime":"2018/12/12 13:23:49","status":"true"}
