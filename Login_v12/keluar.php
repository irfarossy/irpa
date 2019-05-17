<?php
session_start();
session_destroy();
echo"
<script>
alert('anda berhasil keluar');
window.location.href='index.html';
</script>
";
?>