using System;
using System.Collections;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Lab7
{
    public class KeyService
    {

        private static readonly int[] _permutedChoice56Bytes = new int[56]
       {
            57, 49, 41, 33, 25, 17, 9, 1, 58, 50, 42, 34, 26, 18, 10, 2, 59, 51, 43, 35, 27, 19, 11, 3, 60, 52, 44, 36,
            63, 55, 47, 39, 31, 23, 15, 7, 62, 54, 46, 38, 30, 22, 14, 6, 61, 53, 45, 37, 29, 21, 13, 5, 28, 20, 12, 4
       };


        private static readonly int[] _permutedChoice48Bytes = new int[48]
        {
            14, 17, 11, 24, 1, 5, 3, 28, 15, 6, 21, 10, 23, 19, 12, 4, 26, 8, 16, 7, 27, 20, 13, 2, 41, 52, 31, 37, 47,
            55, 30, 40, 51, 45, 33, 48, 44, 49, 39, 56, 34, 53, 46, 42, 50, 36, 29, 32
        };

        private BitArray _firstHalf;
        private BitArray _secondHalf;


        private BitArray LeftShift(BitArray key, int shift)
        {
            var output = new BitArray(28);
            var index = 0;
            for (var i = shift; index < key.Length; i++)
                output[index++] = key[i % key.Length];
            return output;
        }


        private BitArray PermuteChoiceFor56Bytes(BitArray bitArray)
        {
            var output = new BitArray(56);

            for (var i = 0; i < _permutedChoice56Bytes.Length; i++)
                output[i] = bitArray[_permutedChoice56Bytes[i] - 1];

            return output;
        }

        private BitArray PermuteChoiceFor48Bytes(BitArray bitArray)
        {
            var output = new BitArray(48);

            for (var i = 0; i < _permutedChoice48Bytes.Length; i++)
                output[i] = bitArray[_permutedChoice48Bytes[i] - 1];

            return output;
        }

        #region EncryptionKeys

        public BitArray[] GenerateKeys(BitArray primaryKey)
        {
            var output = new BitArray[16];

            var noParityBits = PermuteChoiceFor56Bytes(primaryKey);

            var halves = noParityBits.Split();

            _firstHalf = halves[0];
            _secondHalf = halves[1];

            for (var i = 0; i < 16; i++)
            {
                output[i] = GenerateKeysForBothSides(_firstHalf, _secondHalf, i);
                Debug.WriteLine(i);
                output[i].Debug();
            }

            return output;
        }

        private BitArray GenerateKeysForBothSides(BitArray left, BitArray right, int roundNum)
        {
            BitArray key;
            int shift;
            if (roundNum == 0 || roundNum == 1 || roundNum == 8 || roundNum == 15)
                shift = 1;
            else
                shift = 2;

            _firstHalf = LeftShift(left, shift);
            _secondHalf = LeftShift(right, shift);

            key = _firstHalf.Append(_secondHalf);
            key = PermuteChoiceFor48Bytes(key);
            return key;
        }

        #endregion      

    }
}
