export const transValidation = {
    email_incorrect: 'Email có dạng examble@gmail.com!',
    password_incorrect: 'Mật khẩu ít nhất 5 ký tự',
    password_confirmation_incorrect: 'Nhập lại mật khẩu chưa chính xác'
};

export const transErrors = {
    account_in_use: 'Email này đã được sử dụng.',
    account_removed: 'Tài khoản này đã bị bỡ khỏi hệ thống.',
    login_failed: 'Sai tài khoản hoặc mật khẩu!',
    server_error: 'Có lỗi ở phía Server...'
};

export const transSuccess = {
    userCreated: (userEmail) => {
        return `Tài khoản <strong>${userEmail}</strong> đã được tạo.`
    },
    loginSuccess: (username) => {
        return `Xin chào ${username}!`
    }
};