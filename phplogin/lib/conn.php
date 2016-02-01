<?php 

 $conn = mysql_connect(DB_HOST,DB_USER,DB_PASSWORD) or die("数据库链接错误".mysql_error());
 mysql_select_db(DB_NAME,$conn) or die("数据库访问错误".mysql_error());

?>