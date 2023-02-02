//--------------1--------------//
// const Name = prompt ("Ваше имя" )

// const Familiya = prompt ("Ваше фамилия")

// alert("Здраствуйте " + Name + " " + Familiya)


//--------------2---------------//
// const pravilo = prompt("напишите цвет светофора (за главными буквами)", 'Красный', 'Желтый', 'Зеленый')

// switch (pravilo) {
//     case 'Красный':
//         console.log("Стоп!")
//         break;
//     case 'Желтый':
//         console.log("Жди!")
//         break;
//     case 'Зеленый':
//         console.log("ГАЗУЙ")
//         break;
//     default:
//         console.log("Такого цвета у светофора нет")
//         break;
// }

//--------------3---------------//

const chislo = prompt("Введите число от 1 до 9",'1','2','3','4','5','6','7','8','9')

switch (chislo) {
    case '1':
        alert('1 = |')
        break;
    case '2':
        alert('2 = ||')
        break;
    case '3':
        alert('3 = |||')
        break;
    case '4':
        alert('4 = VI')
        break;
    case '5':
        alert('5 = V')
        break;
    case '6':
        alert('6 = IV')
        break;
    case '7':
        alert('7 = IIV')
        break;
    case '8':
        alert('8 = IIIV')
        break;
    case '9':
        alert('9 = XI')
        break;
    default:
        alert('Больше 9 не умею')
        break;
}