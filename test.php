



<?php


$username = 'sausage.party';
$password = 'Sausage';
$url='http://api.mnetgroup.com/megavote_uat/api/vote/791815473498189824/candidates';
 
$context = stream_context_create(array(
    'http' => array(
        'header'  => "Authorization: Basic " . base64_encode("$username:$password")
    )
));
$data = file_get_contents($url, false, $context);



$string = $data;//file_get_contents("api.json");
$json_a = json_decode($string, true);
var_dump($json_a);
print_r($json_a);
//echo $json_a['John'][status];
//echo $json_a['Jennifer'][status];

?>




	"id": "26876aa9-e1d7-4923-c8ab-262041bfa9df",
	"name": "ACE - Megavote - Sausage Party",
	"description": "",
	"order": [
		"d2f85b19-54f8-a8f7-617f-07f407c8cd13",
		"52fb15a2-f739-3a9e-27e8-a0975d9823d1"
	],
	"folders": [],
	"timestamp": 1477634493930,
	"owner": "271337",
	"public": false,
	"requests": [
		{
			"id": "52fb15a2-f739-3a9e-27e8-a0975d9823d1",
			"headers": "Authorization: Basic c2F1c2FnZS5wYXJ0eTpTYXVzYWdl\n",
			"url": "https://api.mnetgroup.com/megavote_uat/api/vote/791815473498189824/candidates",
			"pathVariables": {},
			"preRequestScript": null,
			"method": "GET",
			"collectionId": "26876aa9-e1d7-4923-c8ab-262041bfa9df",
			"data": null,
			"dataMode": "params",
			"name": "Megavote - Secured Vote API - Vote Rank (GET /api/vote/{promotion}/candidates)",
			"description": "",
			"descriptionFormat": "html",
			"time": 1477634877027,
			"version": 2,
			"responses": [],
			"tests": null,
			"currentHelper": "normal",
			"helperAttributes": {}
		},
		{
			"id": "d2f85b19-54f8-a8f7-617f-07f407c8cd13",
			"headers": "Authorization: Basic c2F1c2FnZS5wYXJ0eTpTYXVzYWdl\n",
			"url": "https://api.mnetgroup.com/megavote_uat/api/vote/web/791815473498189824",
			"pathVariables": {},
			"preRequestScript": null,
			"method": "POST",
			"collectionId": "26876aa9-e1d7-4923-c8ab-262041bfa9df",
			"data": [],
			"dataMode": "raw",
			"name": "Megavote - Secured Vote API - Web (POST /api/vote/web/{promotion})",
			"description": "",
			"descriptionFormat": "html",
			"time": 1477634724677,
			"version": 2,
			"responses": [],
			"tests": null,
			"currentHelper": "normal",
			"helperAttributes": {},
			"rawModeData": "ts=2016-10-29T10:00:00+11:00&source=regis.queffelec@ansibleww.com&contestant=791815543819890688\nts=2016-10-29T10:00:00+11:00&source=regis.queffelec@ansibleww.com&contestant=791815577403682816\nts=2016-10-29T10:00:00+11:00&source=regis.queffelec@ansibleww.com&contestant=791815603395784704\nts=2016-10-29T10:00:00+11:00&source=regis.queffelec@ansibleww.com&contestant=791815633112428544\nts=2016-10-29T10:00:00+11:00&source=regis.queffelec@ansibleww.com&contestant=791815660799029248\nts=2016-10-29T10:00:00+11:00&source=regis.queffelec@ansibleww.com&contestant=791815685520257024\nts=2016-10-29T10:00:00+11:00&source=regis.queffelec@ansibleww.com&contestant=791815709352292352\nts=2016-10-29T10:00:00+11:00&source=regis.queffelec@ansibleww.com&contestant=791815744689303552\nts=2016-10-29T10:00:00+11:00&source=regis.queffelec@ansibleww.com&contestant=791815771335716864\nts=2016-10-29T10:00:00+11:00&source=regis.queffelec@ansibleww.com&contestant=791815799064260608"
		}
	]
}