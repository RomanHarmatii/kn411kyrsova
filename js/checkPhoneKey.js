function checkPhoneKey(key) {
    return (key >= '0' && key <= '9') || key === '+' || key === '(' || key === ')' || key === '-' ||
        key === 'ArrowLeft' || key === 'ArrowRight' || key === 'Delete' || key === 'Backspace';
}