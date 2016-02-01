<?php
session_start();

//检测是否登录，若没登录则转向登录界面
if(!isset($_SESSION['userid'])){
    header("Location:../login.html");
    exit();
}


$userid = $_SESSION['userid'];
$username = $_SESSION['username'];

?>
<?php


require_once("inc/init.php");
require_once("inc/config.ui.php");

include("inc/header.php");

include("inc/nav.php");

?>

<div id="main" role="main">
	<?php
		include("inc/ribbon.php");
	?>


	<div id="content">
	<h1>这是我的主页</h1>
	
	</div>


</div>

<?php 
	//include required scripts
	include("inc/scripts.php"); 
	//include footer
	include("inc/footer.php"); 
?>