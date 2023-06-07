using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using static System.Net.Mime.MediaTypeNames;

namespace Lab7
{
    public class DesMashine
    {
        private readonly DesService desService = new DesService();
        private readonly KeyService keyService = new KeyService();
        private BitArray leftSide;
        private BitArray rightSide;
        private BitArray tempSide;


        private List<string> splitIntoBlock(string text)
        {
            var output = Enumerable.Range(0, text.Length / 64)
                .Select(x => text.Substring(x * 64, 64)).ToList();

            if (text.Length % 64 != 0)
            {
                var missing = text.Skip(output.Count * 64).Take(64).ToList();
                while (missing.Count() != 64)
                {
                    missing.Add('0');
                }

                output.Add(string.Join("", missing));
            }
            return output;
        }

        public string Encrypt(string text, string key)
        {
            text = text.ToBinaryStringWithFirstBytes();

            key = key.ToBinaryStringWithFirstBytes();
            //generate bitArray
            var keyBits = new BitArray(key.Select(c => c == '1').ToArray());

            var result = "";

            //split the string into blocks of 64 bits
            var output = splitIntoBlock(text);

            var newInput = output.ToArray();

            var subKeys = keyService.GenerateKeys(keyBits);
            for (var i = 0; i < newInput.Length; i++)
            {
                var bits = new BitArray(newInput[i].Select(c => c == '1').ToArray());

                //Initial Permutation
                var chunk = desService.FirstPermutation(bits);

                //split the chunk in two halves 32 bit each
                var sides = chunk.Split();

                leftSide = sides[0];
                rightSide = sides[1];


                leftSide = sides[1];
                tempSide = sides[0];

                for (var j = 0; j < 16; j++)
                {
                    rightSide = desService.roundNumFunction(rightSide, subKeys[j]); //func for rightside
                    rightSide = tempSide.Xor(rightSide); //xor for leftside

                    tempSide = leftSide;
                    leftSide = rightSide;
                }

                var finalPerm = rightSide.Append(tempSide);
                finalPerm = desService.FinalPermutation(finalPerm);
                result += BinaryStringToHexString(finalPerm);
            }
            return result;
        }

        public string Decrypt(string cipher, string key)
        {
            cipher = cipher.ToBinaryStringWithFirstBytes();

            key = key.ToBinaryStringWithFirstBytes();

            var keyBits = new BitArray(key.Select(c => c == '1').ToArray());

            var result = "";

            //split the string into blocks of 64 bits
            var output = splitIntoBlock(cipher);


            var newInput = output.ToArray();

            var subKeys = keyService.GenerateKeys(keyBits).Reverse().ToArray();
            for (var i = 0; i < newInput.Length; i++)
            {
                var bits = new BitArray(newInput[i].Select(c => c == '1').ToArray());
                //Initial Permutation
                var chunk = desService.FirstPermutation(bits);

                //split the chunk in two halves 32 bit each
                var sides = chunk.Split();

                //change sides
                leftSide = sides[0];
                rightSide = sides[1];



                leftSide = sides[1];
                tempSide = sides[0];

                for (var j = 0; j < 16; j++)
                {
                    rightSide = desService.roundNumFunction(rightSide, subKeys[j]); //func for rightside
                    rightSide = tempSide.Xor(rightSide); //xor for leftside

                    tempSide = leftSide;
                    leftSide = rightSide;
                }

                var finalPerm = rightSide.Append(tempSide);
                finalPerm = desService.FinalPermutation(finalPerm);
                result += BinaryStringToHexString(finalPerm);
            }
            return result;
        }

        private string BinaryStringToHexString(BitArray bits)
        {
            var sb = new StringBuilder(bits.Length / 4);

            for (var i = 0; i < bits.Length; i += 4)
            {
                var v = (bits[i] ? 8 : 0) |
                        (bits[i + 1] ? 4 : 0) |
                        (bits[i + 2] ? 2 : 0) |
                        (bits[i + 3] ? 1 : 0);

                sb.Append(v.ToString("X1")); // Or "X1"
            }

            return sb.ToString();
        }


    }
}
