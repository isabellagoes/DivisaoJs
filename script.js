// Console.Write("Digite o numerador: ");
// double numerador = Convert.ToDouble(Console.ReadLine());

// Console.Write("Digite o denominador: ");
// double denominador = Convert.ToDouble(Console.ReadLine());

// if (denominador == 0)
// {
//     Console.Write("Não é possível dividir por zero.");
// }

// else
// {
//     double quociente = numerador / denominador;
//     Console.Write($"\n{numerador:N1} dividido por {denominador:N1} é {quociente:N1}.");
// }

let numerador = parseInt(prompt("Digite o numerador: "));
let denominador = parseInt(prompt("Digite o denominador: "));

if (denominador == 0) {
    alert("Não é possível dividir por zero.");
}
else {
    let quociente = numerador / denominador;

    alert(numerador + " " + "dividido por " + denominador + " é " + quociente);
}