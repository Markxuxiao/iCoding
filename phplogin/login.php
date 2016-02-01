<?php



require_once("inc/init.php");

//登录
if(!isset($_POST['submit'])){
    exit('非法访问!');
}
$username = htmlspecialchars($_POST['username']);
//$password = MD5($_POST['password']);
$password = htmlspecialchars($_POST['password']);
//包含数据库连接文件
include('lib/conn.php');
header("Content-type: text/html; charset=utf-8");
//验证登录
$check_query = mysql_query("select uid from example_members where username='$username' and password='$password' limit 1")or die("SQL语句执行失败");
if($result = mysql_fetch_array($check_query)){
    //登录成功
    session_start();
    $_SESSION['username'] = $username;
    $_SESSION['userid'] = $result['uid'];
    echo $username,' 欢迎你！进入 <a href="'.APP_URL.'/home.php">用户中心</a><br />';
    echo '点击此处 <a href="login.php?action=logout">注销</a> 登录！<br />';
    exit;
} else {
    exit('登录失败！点击此处 <a href="javascript:history.back(-1);">返回</a> 重试');
}



//注销登录
if($_GET['action'] == "logout"){
    unset($_SESSION['userid']);
    unset($_SESSION['username']);
    echo '注销登录成功！点击此处 <a href="login.html">登录</a>';
    exit;
}

?>