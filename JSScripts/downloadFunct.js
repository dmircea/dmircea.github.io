function downloadFile(uri, name)
{
	var file = document.createElement("a");
	file.download = name;
	file.href = uri;
	file.click();
	
}