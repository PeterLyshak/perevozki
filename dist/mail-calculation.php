<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    if (isset($_POST['name'])) {$name = $_POST['name'];}
    if (isset($_POST['tel'])) {$tel = $_POST['tel'];}
    if (isset($_POST['form_subject'])) {$form_subject = $_POST['form_subject'];}
	if (isset($_POST['promotion_name'])) {$form_subject = $_POST['promotion_name'];}
	if (isset($_POST['email'])) {$email = $_POST['email'];}
	if (isset($_POST['address_value'])) {$form_subject = $_POST['address_value'];}
	if (isset($_POST['result_price'])) {$email = $_POST['result_price'];}
	if (isset($_POST['time_arrive'])) {$email = $_POST['time_arrive'];}
	if (isset($_POST['time_rent'])) {$email = $_POST['time_rent'];}
	if (isset($_POST['curiers_count'])) {$email = $_POST['curiers_count'];}
	if (isset($_POST['transport_name'])) {$email = $_POST['transport_name'];}
	
	
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
				<b>Какой блок:</b> $form_subject<br><br><br>
				<b>Заказ:</b><br>
				<b>Адреса:</b> $address_value<br>
				<b>Стоимость (расчет):</b> $result_price<br>
				<b>Время подачи:</b> $time_arrive<br>
				<b>Время аренды:</b> $time_rent<br>
				<b>Кол-во курьеров:</b> $curiers_count<br>
				<b>Выбранный автомобиль:</b> $transport_name<br>
				";
	
    $send = mail ($to, $subject, $message, $headers);
    
} else {
    http_response_code(403);
    echo "Попробуйте еще раз";
}
?>