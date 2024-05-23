// js của đăng ký
document.querySelector('.submit').addEventListener('click', function() {
    const accountName = document.getElementById('account-name').value;
    const passAccount = document.getElementById('pass-account').value;
    const nhaplaiPassAccount = document.getElementById('nhaplai-pass-account').value;

    if (passAccount !== nhaplaiPassAccount) {
        alert('Mật khẩu nhập lại không trùng khớp');
        return;
    }

    let accounts = JSON.parse(localStorage.getItem('accounts')) || [];

    if (accounts.some(account => account.name === accountName)) {
        alert('Tài khoản đã tồn tại');
    } else {
        accounts.push({ name: accountName, password: passAccount });
        localStorage.setItem('accounts', JSON.stringify(accounts));
        alert('Tài khoản đăng ký thành công');
        document.querySelector('.reset').click();
    }
});

document.querySelector('.reset').addEventListener('click', function() {
    document.getElementById('account-name').value = '';
    document.getElementById('pass-account').value = '';
    document.getElementById('nhaplai-pass-account').value = '';
});

// js của đăng nhập
document.getElementById('submitButton').addEventListener('click', function() {
    const accountName = document.getElementById('account-name-dangnhap').value;
    const password = document.getElementById('password-dangnhap').value;

    let accounts = JSON.parse(localStorage.getItem('accounts')) || [];

    let account = accounts.find(acc => acc.name === accountName);

    if (!account) {
        alert('Tài khoản chưa được đăng ký');
    } else if (account.password !== password) {
        alert('Bạn nhập mật khẩu sai');
    } else {
        alert('Đăng nhập thành công');
        window.location.href = './success.html'; // Redirect to success page
    }
});

document.getElementById('reset-dangnhap').addEventListener('click', function() {
    document.getElementById('account-name-dangnhap').value = '';
    document.getElementById('password-dangnhap').value = '';
    document.getElementById('noidung-dangnhap').value = '';
});
