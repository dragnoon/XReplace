let jsonObject = JSON.parse($request.body);

jsonObject.inviteeCarNo = "京AAL6167";
$done({ body: JSON.stringify(jsonObject) });
