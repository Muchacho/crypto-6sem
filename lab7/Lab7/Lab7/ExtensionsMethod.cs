using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.CompilerServices;
using System.Text;
using System.Threading.Tasks;

namespace Lab7
{
    public static class ExtensionsMethod
    {
        public static BitArray Append(this BitArray current, BitArray after)
        {
            var bools = new bool[current.Count + after.Count];
            current.CopyTo(bools, 0);
            after.CopyTo(bools, current.Count);
            return new BitArray(bools);
        }

        public static BitArray[] Split(this BitArray current)
        {
            var half1 = new bool[current.Length / 2];
            var half2 = new bool[current.Length / 2];

            for (var i = 0; i < current.Length / 2; i++)
            {
                half1[i] = current[i];
                half2[i] = current[i + current.Length / 2];
            }

            return new[] { new BitArray(half1), new BitArray(half2) };
        }

        public static string Debug(this BitArray bits)
        {
            var str = "";
            for (var i = 0; i < bits.Length; i++)
                str += bits[i].BoolToNumber();
            System.Diagnostics.Debug.WriteLine(str);
            return str;
        }

        public static string BoolToNumber(this bool b)
        {
            return b ? "1" : "0";
        }

        public static string ToBinaryStringWithFirstBytes(this string str)
        {
            return str = string.Join(string.Empty,
               str.Select(
                   c => Convert.ToString(Convert.ToInt32(c.ToString(), 16), 2).PadLeft(4, '0')
               )
           );
        }




    }
}
