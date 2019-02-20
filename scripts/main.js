function saveToFile(mdata){
  $.ajax({
    url: "saver.php",
	cache: false,
    data : mdata,
    type: "POST",
	timeout : 5000
  });
}
