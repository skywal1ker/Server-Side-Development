<!DOCTYPE html>
<html>
<body>

<?php





function func1($magicbox) {
if (is_null($magicbox)) 
{echo 'No magic bro!';}

else {echo 'Abracadabra';}
}


function func2($lorem) {
if(isset($lorem)){
    echo 'Lorem Variable is true';
}else{
    echo 'isset false' . '<br />';
}

if(isset($ipsum)){
    echo 'Ipsum variable is Defined ' . '<br />';
}else{
    echo 'isset false' . '<br />';
}
    }


function func3($mt) {
if (($mt == "")) 
{echo 'This is empty sting value';}

else {echo 'Oh it is not empty string';}
}



function func4($number) {
    if (is_numeric($number) && ($number) < 0) 
    {echo 'This is negative ';}
    
    else {echo 'This is positive';}
    }
    






function func5($bulls) {
    if (is_bool($bulls)) 
    {echo 'This is BOOLEAN ';}
    
    else {echo 'This is not BOOLEAN';}
    }
        
    
        


$magicbox = NULL;
echo "This is first test functiion on the right!   ";
func1($magicbox);
echo "\r\n";

echo "This is second test functiion on the right!   ";
$lorem = "potato";
func2($lorem);
echo "\r\n";


$mt = "";
func3($mt);
echo "\r\n";

$number ="-76";
func4($number);
echo "\r\n";

$bulls = TRUE;
func5($bulls);
echo "\r\n";
?>

</body>
</html>
