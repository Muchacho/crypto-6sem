using System;
using System.Diagnostics;
using System.Linq;

namespace lab_13
{
    class Program
    {
        static void Main(string[] args)
        {
            //task 1.1
            Console.WriteLine("Задание 1.1");
            int xmin = 71, xmax = 105, a = -1, b = 1, p = 751;
            for (int x = xmin; x <= xmax; x++)
            {
                Console.WriteLine($"x = {x}, y = {Math.Sqrt((x * x * x - x + b) )%p}");
            }

            //task 1.2
            Console.WriteLine("Задание 1.2");
            int[] P = { 86, 25 }, Q = { 90, 21 }, R = { 83, 14 };
            Console.WriteLine($"P({P[0]}, {P[1]}), Q({Q[0]}, {Q[1]}), R({R[0]}, {R[1]})");
            int[] kP = EllipticCurves.kP(7, P, a, p);
            int[] lQ = EllipticCurves.kP(8, Q, a, p);
            Console.WriteLine($"kP = 7P = {kP.Select(el => el.ToString()).Aggregate((prev, current) => "R(" + prev + ", " + current + ")")}");
            Console.WriteLine($"P + Q = {EllipticCurves.CalculateSum(P, Q, p).Select(el => el.ToString()).Aggregate((prev, current) => "R(" + prev + ", " + current + ")")}");
            Console.WriteLine($"kP + lQ - R = 7P + 8Q - R = {EllipticCurves.CalculateSum(EllipticCurves.CalculateSum(kP, lQ, p), EllipticCurves.InversePoint(R), p).Select(el => el.ToString()).Aggregate((prev, current) => "R(" + prev + ", " + current + ")")}");
            Console.WriteLine($"P - Q + R = {EllipticCurves.CalculateSum(EllipticCurves.CalculateSum(P, EllipticCurves.InversePoint(Q), p), R, p).Select(el => el.ToString()).Aggregate((prev, current) => "R(" + prev + ", " + current + ")")}");
            Console.WriteLine();

            //task 2
            Console.WriteLine("\n\n\n");
            Console.WriteLine("Задание 2");
            string text = "романбутурля";
            Console.WriteLine($"Текст для шифрования: {text}");
            var stopwatch = Stopwatch.StartNew();
            int[,] encryptedText = EllipticCurves.Encrypt(text, new int[] { 0, 1 }, a, p, 25);
            stopwatch.Stop();
            Console.WriteLine($"Зашифр текст: {string.Join(" ", encryptedText.Cast<int>())}");
            Console.WriteLine($"Зашифр время: {stopwatch.ElapsedTicks} ticks");
            stopwatch.Restart();
            Console.WriteLine($"Расшифр текст: {EllipticCurves.Decrypt(encryptedText, a, p, 25)}");
            stopwatch.Stop();
            Console.WriteLine($"Расшифр время: {stopwatch.ElapsedTicks} ticks");
            Console.WriteLine();

            ////task 3
            ///
            Console.WriteLine("\n\n\n");
            Console.WriteLine("Задание 3");

            stopwatch.Restart();
            int[] digitalSign = EllipticCurves.CreateDigitalSign(new int[] { 416, 55 }, 13, 7, a, p);
            stopwatch.Stop();
            Console.WriteLine($"Цифр подпись: {digitalSign.Select(el => el.ToString()).Aggregate((prev, current) => prev + " " + current)}");
            Console.WriteLine($"Время создания цифр подписи: {stopwatch.ElapsedTicks}");
            stopwatch.Restart();
            Console.WriteLine($"Проверка валидности подписи: {EllipticCurves.VerifyDigitalSign(digitalSign, new int[] { 416, 55 }, 13, 7, a, p)}");
            stopwatch.Stop();
            Console.WriteLine($"Время проверки подписи: {stopwatch.ElapsedTicks}");

            Console.ReadKey();
        }
    }
}
