using System.Text.RegularExpressions;
using System.Text;
using System.Diagnostics;

namespace Lab7
{
    internal class Program
    {
        public static byte[] FromHexToString(string hex)
        {
            hex = hex.Replace("-", "");
            byte[] raw = new byte[hex.Length / 2];
            for (int i = 0; i < raw.Length; i++)
            {
                raw[i] = Convert.ToByte(hex.Substring(i * 2, 2), 16);
            }
            return raw;
        }

        public static string ToNormalString(string str)
        {
            return Regex.Replace(new string(Encoding.ASCII.GetChars(FromHexToString(str))).Trim(), @"[^\u0020-\u007E]", string.Empty);
        }

        static void Main(string[] args)
        {
            Stopwatch sw = new Stopwatch();
            
            Console.WriteLine("Input word:");
            string text = Console.ReadLine();
            Console.WriteLine("Key must be 64 bit,that means key length is 16 symbols");
            Console.WriteLine("Input first key");
            string key1 = Console.ReadLine();
            Console.WriteLine("Input second key");
            string key2 = Console.ReadLine();
            Console.WriteLine("Input third key");
            string key3 = Console.ReadLine();
            Console.WriteLine($"Encryption algorithm DES-EDE3(First and Third key are the same)\nFirst key: {key1}\nSecond key: {key2}\nThird key:{key1}");

            //convert to binary format
            text = string.Join("", Encoding.ASCII.GetBytes(text).Select(c => c.ToString("X2")));
            key1 = string.Join("", Encoding.ASCII.GetBytes(key1).Select(c => c.ToString("X2")));
            key2 = string.Join("", Encoding.ASCII.GetBytes(key2).Select(c => c.ToString("X2")));

            
            var des = new DesMashine();
            sw.Start();
            var res = des.Encrypt(text, key1);
            //res = des.Encrypt(res, key2);
            res = des.Decrypt(res, key2);

            res = des.Encrypt(res, key1);
            sw.Stop();
            //Console.WriteLine($"Encrypte word: {ToNormalString(res)}");
            Console.WriteLine($"Encrypte word: {res} time {sw.Elapsed} {sw.ElapsedMilliseconds}");

            sw.Start ();
            var res2 = des.Decrypt(res, key1);
            //res2 = des.Decrypt(res2, key2);
            res2 = des.Encrypt(res2, key2);
            res2 = des.Decrypt(res2, key1);
            sw.Stop();

            Console.WriteLine($"Decrypt word: {ToNormalString(res2)}  time {sw.Elapsed} {sw.ElapsedMilliseconds}");
            Console.ReadKey();
        }


      
    }
}