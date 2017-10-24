<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    if (isset($_POST['name'])) {$name = $_POST['name'];}
    if (isset($_POST['tel'])) {$tel = $_POST['tel'];}
    if (isset($_POST['form_subject'])) {$form_subject = $_POST['form_subject'];}
	if (isset($_POST['promotion_name'])) {$form_subject = $_POST['promotion_name'];}
	if (isset($_POST['email'])) {$email = $_POST['email'];}
	
	
	
    $to = "lishak09@gmail.com"; /*Укажите адрес, на который должно приходить письмо*/
    $sendfrom   = "info@perevozki.spb.ru"; /*Укажите адрес, с которого будет приходить письмо, можно не настоящий, нужно для формирования заголовка письма*/
    $headers  = "From: " . strip_tags($sendfrom) . "\r\n";
    $headers .= "Reply-To: ". strip_tags($sendfrom) . "\r\n";
    $headers .= "MIME-Version: 1.0\r\n";
    $headers .= "Content-Type: text/html;charset=utf-8 \r\n";
    $subject = "Заявка с сайта Перевозки СПБ";
    $message = "<b>Проект:</b> Перевозки <br>
				<b>Имя:</b> $name <br>
				<b>Телефон:</b> $tel<br>
				<b>Какая акция выбрана:</b> $promotion_name<br>
				<b>Какой блок:</b> $form_subject<br>";
	
    $send = mail ($to, $subject, $message, $headers);
    
} else {
    http_response_code(403);
    echo "Попробуйте еще раз";
}
?>