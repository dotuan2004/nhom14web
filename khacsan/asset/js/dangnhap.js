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
        window.location.href = '../html/Home.html'; // Redirect to success page
    }
});

document.getElementById('reset-dangnhap').addEventListener('click', function() {
    document.getElementById('account-name-dangnhap').value = '';
    document.getElementById('password-dangnhap').value = '';
    document.getElementById('noidung-dangnhap').value = '';
});