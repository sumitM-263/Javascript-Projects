const checkBtn = document.getElementById('check-btn');
const textInput = document.getElementById('text-input');
const result = document.getElementById('result');

result.style.display='none';


const validVal = (char) => {

    if (char >= '0' && char <= '9' || char >= 'A' && char <= 'Z' || char >= 'a' && char <= 'z') return true;
    else return false;
}


const checkPalindrome = () => {
    const value = textInput.value;
    
    if (value === '') {
        alert('Please input a value');
    }

    else {

        let textValue = '';

        for (let i = 0; i < value.length; i++) {
            if (validVal(value[i])) {
                textValue += value[i];
            }
        }

        textValue = textValue.toLowerCase();

        let reverseValue = textValue.split('').reverse().join('');

       

        result.style.display='block';


        if (reverseValue === textValue) {
            result.innerHTML = `<strong>${value}</strong> is a palindrome`
        } else {
            result.innerHTML = `<strong>${value}</strong> is not a palindrome`

        }

    }



}


checkBtn.addEventListener('click', checkPalindrome);