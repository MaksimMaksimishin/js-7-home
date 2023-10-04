// const students = ['Ivan', 'Kolya'];

// const action = prompt('1. Del, 2. Add');

// const studentsName = prompt('Enter studens name')

// const workName = toTitle(studentsName.trim());

// function toTitle(str) {
//     if (!str) {
//         alert('str zero')
//         return str;
//     }
//     let res = str[0].toUpperCase() + str.toLowerCase().splice(1);
//     return res;
// }

// if (action == '1') {
//     if (students.includes(workName)) {
//         students.splice(students.indexOf(workName), 1);
//     }
// } else if ((students.includes(workName))) {
//     console.log('Wrong');

// } else if (action == '2') {
//     students.push(workName);
// }
//////////////////////////////////////// lesson ///



const students = [
    {
        name: 'Ivan',
        phone: '0992223322',
    },

    {
        name: 'Gena',
        phone: '0992223321',
    },

    {
        name: 'Ivan',
        phone: '0992223377',
    },

    {
        name: 'Maks',
        phone: '0988517135',
    }
];


let named;
let phoneN;
let wn;
let ind;
let a;

console.log(list(students));

function list(arrayN) {
    let array = arrayN;

    while (true) {
        let choose = prompt('Choose:\n 1 - ADD,\n 2 - DELETE.');

        while (choose !== '1' && choose !== '2') {
            alert('Incorrectly entered data.');
            console.log('Incorrectly entered data.');
            choose = prompt('Choose:\n 1 - ADD,\n 2 - DELETE.');
        }

        named = prompt('Enter name please');

        a = false

        while (a === false) {

            a = true;

            for (let i = 0; i < named.length; i++) {

                if (named[i] >= '0' && named[i] <= '9') {
                    a = false;
                    named = prompt('Invalid format. Enter the name again.');
                    break;
                }
            }
        }

        console.log('Name:', named);

        ind = checkupName(array, named);

        if (choose === '1') {

            if (ind === 'not found') {
                phoneN = prompt('Enter phone please. Format: 0501111111');

                a = false

                while (a === false) {

                    if (phoneN.length === 10) {
                        a = true;

                        for (let i = 0; i < phoneN.length; i++) {

                            if (phoneN[i] < '0' || phoneN[i] > '9') {
                                a = false;
                                break;
                            }
                        }

                        if (a === false) {
                            phoneN = prompt('Invalid format. Enter the phone number again. Format: 0501111111');
                        }
                    } else {
                        phoneN = prompt('Invalid format. Enter the phone number again. Format: 0501111111');
                    }
                }

                console.log('Phone:', phoneN);
                array.push({ name: named, phone: phoneN });
                alert('Your data has been added to the list.');
                console.log('Your data has been added to the list.');
            } else {
                alert('Such a name is already in the list.');
                console.log('Such a name is already in the list.');
            }

        } else if (choose === '2') {

            if (ind >= 0) {
                array.splice(ind, 1);
                alert('Information about the student ' + named + ' has been deleted.');
                console.log('Information about the student ' + named + ' has been deleted.');
            } else {
                alert('Such a student is not on the list.');
                console.log('Such a student is not on the list.');
            }

        } else {
            alert('Incorrectly entered data.');
            console.log('Incorrectly entered data.');
        }

        const con = confirm('Continue (Ok) or exit (Cancel)');

        if (con === true) {
            continue;
        } else {
            break;
        }

    }

    return array;
}

function checkupName(text, wordName) {

    for (let i = 0; i < text.length; i++) {

        if (text[i].name === wordName) {
            wn = i;
            break;
        } else {
            wn = 'Not Found';
        }
    }

    return wn;
}

