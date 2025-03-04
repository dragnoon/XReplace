let jsonObject = JSON.parse($request.body);

jsonObject.inviteeCarNo = "京AAP0988";
$done({ body: JSON.stringify(jsonObject) });
