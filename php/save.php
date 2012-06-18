<?php
$value = json_decode($_POST['json']);
$myFile = "testFile.txt";
$fh = fopen($myFile, 'w') or die("can't open file");
fwrite($fh, $_POST['json']);
fclose($fh);
echo $value->currentScrn;
?>