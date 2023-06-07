﻿using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Lab7
{
    public class DesService
    {
        private readonly int[] _sboxPermutationMatrix = new int[32]
        {
            15, 6, 19, 20, 28, 11, 27, 16,
            0, 14, 22, 25, 4, 17, 30, 9,
            1, 7, 23, 13, 31, 26, 2, 8,
            18, 12, 29, 5, 21, 10, 3, 24
        };

        public BitArray roundNumFunction(BitArray input, BitArray key)
        {
            //расширяем до 48
            var ExpandArrayedBox = ExpandArray(input);
            //операция xor над ключом и расшиеренной частью
            var xored = ExpandArrayedBox.Xor(key);
            //блок подстановки
            var boxed = Substitution(xored);
            //блок перестановки
            var permutated = Permutation(boxed);
            return permutated;
        }

        private BitArray ExpandArray(BitArray input)
        {
            var array = new bool[48];

            for (var i = 0; i < 48; i++)
                array[i] = input[expanseMatrix[i] - 1];

            return new BitArray(array);
        }


        private BitArray Substitution(BitArray input)
        {
            string r;
            int row, col;
            string c;

            var output = new BitArray(32);

            var boxes = new BitArray[8];
            //for all 8 blocks,6 bit per block
            for (var i = 0; i < 8; i++) 
            {
                boxes[i] = new BitArray(6);
                //6 bits in each bloch
                for (var j = 0; j < 6; j++) 
                    boxes[i][j] = input[j + i * 6];
            }

            for (var i = 0; i < boxes.Length; i++)
            {
                var box = boxes[i];
                r = (box[0] ? "1" : "0") + (box[5] ? "1" : "0");
                row = Convert.ToInt32(r, 2);
                c = box[1].BoolToNumber() + box[2].BoolToNumber() + box[3].BoolToNumber() + box[4].BoolToNumber();
                col = Convert.ToInt32(c, 2);


                var sValue = Boxes[i + 1][row, col];
                var binaryValue = Convert.ToString(sValue, 2).PadLeft(4, '0');
                for (var j = 0; j < 4; j++)
                    output[j + i * 4] = binaryValue[j] == '1';
            }

            return output;
        }

        public BitArray FirstPermutation(BitArray bitArray)
        {
            var array = new bool[bitArray.Length];

            for (var i = 0; i < 64; i++)
                array[i] = bitArray[firstPermutation[i] - 1];

            return new BitArray(array);
        }

        public BitArray FinalPermutation(BitArray bitArray)
        {
            var array = new bool[bitArray.Length];

            for (var i = 0; i < 64; i++)
                array[i] = bitArray[lastPermutation[i] - 1];

            return new BitArray(array);
        }

        private BitArray Permutation(BitArray bitArray)
        {
            var array = new bool[bitArray.Length];

            for (var i = 0; i < 32; i++)
                array[i] = bitArray[_sboxPermutationMatrix[i]];

            return new BitArray(array);
        }

        #region FirstBox-eighthBox

        private static readonly int[,] firstBox =
        {
            {14, 4, 13, 1, 2, 15, 11, 8, 3, 10, 6, 12, 5, 9, 0, 7},
            {0, 15, 7, 4, 14, 2, 13, 1, 10, 6, 12, 11, 9, 5, 3, 8},
            {4, 1, 14, 8, 13, 6, 2, 11, 15, 12, 9, 7, 3, 10, 5, 0},
            {15, 12, 8, 2, 4, 9, 1, 7, 5, 11, 3, 14, 10, 0, 6, 13}
        };

        private static readonly int[,] secondBox =
        {
            {15, 1, 8, 14, 6, 11, 3, 4, 9, 7, 2, 13, 12, 0, 5, 10},
            {3, 13, 4, 7, 15, 2, 8, 14, 12, 0, 1, 10, 6, 9, 11, 5},
            {0, 14, 7, 11, 10, 4, 13, 1, 5, 8, 12, 6, 9, 3, 2, 15},
            {13, 8, 10, 1, 3, 15, 4, 2, 11, 6, 7, 12, 0, 5, 14, 9}
        };

        private static readonly int[,] thirdBox =
        {
            {10, 0, 9, 14, 6, 3, 15, 5, 1, 13, 12, 7, 11, 4, 2, 8},
            {13, 7, 0, 9, 3, 4, 6, 10, 2, 8, 5, 14, 12, 11, 15, 1},
            {13, 6, 4, 9, 8, 15, 3, 0, 11, 1, 2, 12, 5, 10, 14, 7},
            {1, 10, 13, 0, 6, 9, 8, 7, 4, 15, 14, 3, 11, 5, 2, 12}
        };

        private static readonly int[,] fourthBox =
        {
            {7, 13, 14, 3, 0, 6, 9, 10, 1, 2, 8, 5, 11, 12, 4, 15},
            {13, 8, 11, 5, 6, 15, 0, 3, 4, 7, 2, 12, 1, 10, 14, 9},
            {10, 6, 9, 0, 12, 11, 7, 13, 15, 1, 3, 14, 5, 2, 8, 4},
            {3, 15, 0, 6, 10, 1, 13, 8, 9, 4, 5, 11, 12, 7, 2, 14}
        };

        private static readonly int[,] fiffthBox =
        {
            {2, 12, 4, 1, 7, 10, 11, 6, 8, 5, 3, 15, 13, 0, 14, 9},
            {14, 11, 2, 12, 4, 7, 13, 1, 5, 0, 15, 10, 3, 9, 8, 6},
            {4, 2, 1, 11, 10, 13, 7, 8, 15, 9, 12, 5, 6, 3, 0, 14},
            {11, 8, 12, 7, 1, 14, 2, 13, 6, 15, 0, 9, 10, 4, 5, 3}
        };

        private static readonly int[,] sixthBox =
        {
            {12, 1, 10, 15, 9, 2, 6, 8, 0, 13, 3, 4, 14, 7, 5, 11},
            {10, 15, 4, 2, 7, 12, 9, 5, 6, 1, 13, 14, 0, 11, 3, 8},
            {9, 14, 15, 5, 2, 8, 12, 3, 7, 0, 4, 10, 1, 13, 11, 6},
            {4, 3, 2, 12, 9, 5, 15, 10, 11, 14, 1, 7, 6, 0, 8, 13}
        };

        private static readonly int[,] seventhBox =
        {
            {4, 11, 2, 14, 15, 0, 8, 13, 3, 12, 9, 7, 5, 10, 6, 1},
            {13, 0, 11, 7, 4, 9, 1, 10, 14, 3, 5, 12, 2, 15, 8, 6},
            {1, 4, 11, 13, 12, 3, 7, 14, 10, 15, 6, 8, 0, 5, 9, 2},
            {6, 11, 13, 8, 1, 4, 10, 7, 9, 5, 0, 15, 14, 2, 3, 12}
        };

        private static readonly int[,] eighthBox =
        {
            {13, 2, 8, 4, 6, 15, 11, 1, 10, 9, 3, 14, 5, 0, 12, 7},
            {1, 15, 13, 8, 10, 3, 7, 4, 12, 5, 6, 11, 0, 14, 9, 2},
            {7, 11, 4, 1, 9, 12, 14, 2, 0, 6, 10, 13, 15, 3, 5, 8},
            {2, 1, 14, 7, 4, 10, 8, 13, 15, 12, 9, 0, 3, 5, 6, 11}
        };


        private readonly Dictionary<int, int[,]> Boxes = new Dictionary<int, int[,]>
        {
            {1, firstBox},
            {2, secondBox},
            {3, thirdBox},
            {4, fourthBox},
            {5, fiffthBox},
            {6, sixthBox},
            {7, seventhBox},
            {8, eighthBox}
        };

        #endregion

        #region Matrix for permutatuon

        private readonly int[] firstPermutation = new int[]
        {
            58, 50, 42, 34, 26, 18, 10, 2, 60, 52, 44, 36, 28, 20, 12, 4, 62, 54, 46, 38, 30, 22, 14, 6, 64, 56, 48, 40,
            32, 24, 16, 8, 57, 49, 41, 33, 25, 17, 9, 1, 59, 51, 43, 35, 27, 19, 11, 3, 61, 53, 45, 37, 29, 21, 13, 5,
            63, 55, 47, 39, 31, 23, 15, 7
        };

        private readonly int[] lastPermutation = new int[] 
        {
            40, 8, 48, 16, 56, 24, 64, 32, 39, 7, 47, 15, 55, 23, 63, 31, 38, 6, 46, 14, 54, 22, 62, 30, 37, 5, 45, 13,
            53, 21, 61, 29, 36, 4, 44, 12, 52, 20, 60, 28, 35, 3, 43, 11, 51, 19, 59, 27, 34, 2, 42, 10, 50, 18, 58, 26,
            33, 1, 41, 9, 49, 17, 57, 25
        };

        private readonly int[] expanseMatrix = new int[]
        {
            32, 1, 2, 3, 4, 5, 4, 5, 6, 7, 8, 9, 8, 9, 10, 11, 12, 13, 12, 13, 14, 15, 16, 17, 16, 17, 18, 19, 20, 21,
            20, 21, 22, 23, 24, 25, 24, 25, 26, 27, 28, 29, 28, 29, 30, 31, 32, 1
        };

        #endregion
    }

}

